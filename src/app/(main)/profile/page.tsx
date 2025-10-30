import { auth } from "@/auth";
import { EmptyOutline } from "@/components/empty-demo";
import { DataTableDemo } from "@/components/table-demo";
import { TypographyH1, TypographyH3 } from "@/components/typography";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { AvatarFallback } from "@radix-ui/react-avatar";

export default async function Profile() {
  const session = await auth();
  const user = session?.user;

  return (
    <div className="flex flex-3 flex-col w-2xl">
      <TypographyH1 className="">Profile</TypographyH1>

      <div className="flex mt-15">
        <div className="mr-10 mb-5">
          <Avatar className="size-25">
            <AvatarImage src={user?.image || undefined} />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>
        <div>
          <TypographyH3>{user?.name}</TypographyH3>
          <p>{user?.email}</p>
          {/* isadmin? show admin badge or dont show anything */}
        </div>
      </div>
      <Separator className="bg-main-dark mb-12" />

      {/* <TypographyH3">Owned</TypographyH3>
      <DataTableDemo /> */}
      <EmptyOutline />

      <TypographyH3 className="mt-12">Have Write Access</TypographyH3>
      <DataTableDemo />
    </div>
  );
}
