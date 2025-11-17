"use client";

import { useState } from "react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Button } from "@/components/ui/button";
import { Cloud } from "lucide-react";
import { ScrollArea } from "./ui/scroll-area";

import { useSession } from "next-auth/react";
import { Label } from "./ui/label";
import { Input } from "./ui/input";

export default function SalesForceForm() {
  const [loading, setLoading] = useState(false);
  const [revenue, setRevenue] = useState("");
  const [phone, setPhone] = useState("");
  const [website, setWebsite] = useState("");

  const { data: session } = useSession();
  const user = session?.user;

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);

    const res = await fetch("/api/salesforce/create", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: user?.name,
        email: user?.email,
        revenue: revenue,
        phone: phone,
        website: website,
      }),
    });

    setLoading(false);

    if (!res.ok) {
      alert("Salesforce submission failed");
      return;
    }

    alert("Submitted to Salesforce!");
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="default">
          <Cloud />
        </Button>
      </DialogTrigger>

      <DialogContent>
        <DialogTitle>Salesforce</DialogTitle>

        <form onSubmit={handleSubmit}>
          <ScrollArea className="w-full h-150">
            <div className="flex flex-col gap-5 pl-2 pr-2">
              <Label htmlFor="revenue">Annual Revenue</Label>
              <Input
                type="revenue"
                id="revenue"
                placeholder="Annual Revenue"
                value={revenue}
                onChange={(e) => setRevenue(e.target.value)}
              />

              <Label htmlFor="phone">Phone</Label>
              <Input
                type="phone"
                id="phone"
                placeholder="Phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />

              <Label htmlFor="website">Website</Label>
              <Input
                type="website"
                id="website"
                placeholder="Website"
                value={website}
                onChange={(e) => setWebsite(e.target.value)}
              />
            </div>

            <DialogFooter className="mt-2 mr-2">
              <DialogClose asChild>
                <Button variant="outline" disabled={loading}>
                  Cancel
                </Button>
              </DialogClose>

              <Button type="submit" disabled={loading}>
                {loading ? "Saving..." : "Save changes"}
              </Button>
            </DialogFooter>
          </ScrollArea>
        </form>
      </DialogContent>
    </Dialog>
  );
}
