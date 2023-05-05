export default function Nav() {
  return (
      <div className="justify-between w-full nav flex  bg-white pb-5 ">
        <div className="flex gap-2 font-bold"><h1 className="text-xl">Notifications </h1> <p className="bg-blue-900 text-white px-2 py-1 rounded flex align-middle justify-center">3</p> </div>

        <p className="text-gray-600 hover:text-blue-900 cursor-pointer"> Mark all as read</p>
      </div>
  );
}
