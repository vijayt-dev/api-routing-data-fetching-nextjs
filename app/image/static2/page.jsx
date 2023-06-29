import { getImagesStatic2 } from "@/utils/getImagesStatic2";
import Image from "next/image";

const Static2 = async () => {
  const {message} = await getImagesStatic2();
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      <h2>Static2 Image</h2>
      <div>
        <Image src={message} width={500} height={500} />
      </div>
    </div>
  );
};

export default Static2;
