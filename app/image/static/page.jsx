import { getImage } from "@/utils/getImages";
import Image from "next/image";

const Static = async () => {
  const {message} = await getImage();
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      <h2>Static Image</h2>
      <div>
        <Image src={message} width={500} height={500} />
      </div>
    </div>
  );
};

export default Static;
