import { getImagesDynamic } from "@/utils/getImagesDynamic";
import Image from "next/image";

const Dynamic = async () => {
  const { message } = await getImagesDynamic();

  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      <h2>Dynamic Image</h2>
      <div>
        <Image src={message} width={500} height={500} />
      </div>
    </div>
  );
};

export default Dynamic;
