import Button from "../../../../../components/Ui/Button";
import Tabs from "../../../../../components/Ui/Tabs";
import ReactPlayer from 'react-player/youtube'

export default function VideoIframe({ description, contents }) {
  const tabsItem = [
    {
      content: <p>{description}</p>,
    },
    {
      content: <p>This is notes</p>,
    },
    {
      content: <p>This is resources</p>,
    },
  ];

  return (
    <div className="w-full lg:w-[65%] xl:w-[65%] border-r-[2px] border-r-[#D1D7DC]">
      {/* video content */}
      <div className="w-full h-[40vh] lg:h-[70vh] xl:h-[70vh] flex flex-col items-end gap-4">
        <ReactPlayer
          url={`${contents?.contentLink}`} // The video URL
          playing={true}
          controls={true}
          width="100%"
          height="100%"
          config={{
            youtube: {
              playerVars: { autoplay: 1 }
            },
          }}
        />
        <div className="w-full lg:w-[40%] xl:w-[40%] flex gap-12 items-center px-4">
          <Button outlineBtn>Previous</Button>
          <Button bgBtn>Next</Button>
        </div>
      </div>
      {/* description */}
      <div className="h-[40%] mt-10 px-4 hidden flex:flex xl:flex">
        <Tabs
          tabs={["Description", "Notes", "Resources"]}
          tabItems={tabsItem}
        />
      </div>
      <div className="h-[40%] mt-10 px-4 flex flex:hidden xl:hidden">
        <Tabs
          tabs={["Description", "Notes", "Resources"]}
          tabItems={tabsItem}
        />
      </div>
    </div>
  );
}
