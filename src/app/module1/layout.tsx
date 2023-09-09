import DndProviderContext from "@/utils/context/DndProviderContext";
import ActivityTask from "./_components/Activity Task/ActivityTask";
import Blocks from "./_components/Blocks/Blocks";
import NavbarMain from "./_components/Navbar/NavbarMain";
import WorkSpace from "./_components/Workspace/WorkSpace";
import Output from "./_components/Output/Output";
import Inventory from "./_components/Inventory/Inventory";

export default function Module1Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="h-screen w-screen bg-Erie-Black text-white">
      <NavbarMain />
      <div className="flex h-[90vh] w-full gap-[0.5%]">
        <DndProviderContext>
          <div className="flex w-[26.3%] flex-col border-r border-r-Lavender/30">
            <ActivityTask />
            <Blocks />
          </div>
          <div className="flex w-[39.01%] flex-col">
            <WorkSpace />
          </div>
          <div className="flex w-[33.95%] flex-col">
            <Output />
            <Inventory />
          </div>
        </DndProviderContext>
      </div>
    </section>
  );
}
