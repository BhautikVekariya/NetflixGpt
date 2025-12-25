const VideoTitle = ({ title, overview }) => {
  return (
    <div className="absolute top-0 left-0 w-screen aspect-video pt-[16%] px-24 text-white bg-gradient-to-t from-black z-20">
      <h1 className="text-4xl font-bold">{title}</h1>

      <p className="py-6 text-lg w-1/4">
        {overview}
      </p>

      <div>
        <button className="bg-slate-50 text-black p-4 px-12 text-xl rounded-lg hover:bg-opacity-80">
          ▶ Play
        </button>

        <button className="m-2 bg-gray-500 text-white p-4 px-12 text-xl bg-opacity-50 rounded-lg">
          ⓘ More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
