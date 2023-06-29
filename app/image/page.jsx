import Link from "next/link";

const Image = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      <h2>Images</h2>
      <p>
        <Link href="/image/static">Static Image</Link>
      </p>
      <p>
        <Link href="/image/dynamic">Dynamic Image</Link>
      </p>
      <p>
        <Link href="/image/static2">Static2 Image</Link>
      </p>
    </div>
  );
};

export default Image;
