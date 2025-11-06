import { auth } from "@/auth";
import { EmptyOutline } from "@/components/empty-outline";
import { DataTableDemo } from "@/components/table-demo";
import { TypographyH1, TypographyH3 } from "@/components/typography";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Switch } from "@/components/ui/switch";
import { AvatarFallback } from "@radix-ui/react-avatar";

export default async function Profile() {
  const session = await auth();
  const user = session?.user;

  return (
    <div className="flex flex-3 flex-col w-2xl">
      <TypographyH1 className="">Profile</TypographyH1>

      <div className="flex mt-15">
        <div className="mr-10 mb-5">
          <Avatar className="size-25 border">
            <AvatarImage src={user?.image || undefined} />
            <AvatarFallback className="w-full text-center self-center text-5xl">
              {user?.name?.charAt(0)}
              {user?.name?.split(" ")[1].charAt(0)}
            </AvatarFallback>
          </Avatar>
        </div>
        <div>
          <TypographyH3>{user?.name}</TypographyH3>
          <p>{user?.email}</p>
          <div className="flex items-center space-x-2 mt-5">
            <Switch id="role" />
            <Label htmlFor="role">User</Label>
          </div>
        </div>
      </div>
      <Separator className="bg-main-dark mb-12 dark: bg-gray-500" />

      {/* <TypographyH3">Owned</TypographyH3>
      <DataTableDemo /> */}
      <EmptyOutline />

      <TypographyH3 className="mt-12">Have Write Access</TypographyH3>
      <DataTableDemo />
    </div>
  );
}
