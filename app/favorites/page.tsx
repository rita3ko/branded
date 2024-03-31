import { Icons } from "@/components/icons";
import { NamesTable } from "@/components/names-table";
import { Button } from "@/components/ui/button";
import { createClient } from "@/utils/supabase/server";
import Link from "next/link";
import { redirect } from "next/navigation";

export default async function Favorites() {
  const supabase = createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/login");
  }

  const { data: names } = await supabase
    .from("names")
    .select()
    .eq("created_by", user?.id)
    .eq("favorited", true);

  const namesList: { [name: string]: string } = {};

  if (names) {
    for (const name of names) {
      namesList[name.name] = name.id;
    }
  }

  return namesList && Object.keys(namesList).length > 0 ? (
    <div className="w-full px-4 flex justify-center items-center flex-col">
      <h1 className="text-2xl font-bold mb-4">Favorites</h1>
      <div className="min-h-screen">
        <NamesTable namesList={namesList} user={user} />
      </div>
    </div>
  ) : (
    <div className="w-full px-4 flex justify-center items-center flex-col min-h-screen">
      <Icons.favorite style={{ width: '20px', height: '20px', marginBottom: '16px' }} />
      <h1 className="text-2xl font-bold mb-4">No favorites to show</h1>
      <Link className="flex justify-center pt-2" href="/new">
        <Button variant="outline">Get Started</Button>
      </Link>
    </div>
  );
}
