import User from "@/components/User";
import TonConnect from "@/components/ TonConnect";

export default function Page() {
  return (
    <div className="flex items-center flex-col gap-2 mt-2">
      <TonConnect />
      <div>
        <User />
      </div>
    </div>
  );
}
