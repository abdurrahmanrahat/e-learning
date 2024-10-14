import Button from "../../../../../components/Ui/Button";
import Tabs from "../../../../../components/Ui/Tabs";
import ReactPlayer from 'react-player/youtube'

export default function VideoIframe({content, activeModuleIndex, activeVideoIndex, setActiveVideoIndex }) {
  const tabsItem = [
    {
      content: <p>{content[activeModuleIndex || 0]?.description}</p>,
    },
    {
      content: <p>{content[activeModuleIndex || 0]?.notes}</p>,
    },
    {
      content: <p>{content[activeModuleIndex || 0]?.resources}</p>,
    },
  ];

  console.log(content[activeModuleIndex])

  return (
    <div className="w-full lg:w-[65%] xl:w-[65%] border-r-[2px] border-r-[#D1D7DC]">
      {/* video content */}
      <div className="w-full h-[40vh] lg:h-[70vh] xl:h-[70vh] flex flex-col items-end gap-4">
        <ReactPlayer
          url={`${content[activeModuleIndex || 0]?.content[activeVideoIndex]?.contentLink}`}
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
          <Button handler={()=> setActiveVideoIndex(activeVideoIndex > 0 && activeVideoIndex - 1 || 0)} outlineBtn>Previous</Button>
          <Button handler={()=> setActiveVideoIndex(activeVideoIndex || 0 + 1)} bgBtn>Next</Button>
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
