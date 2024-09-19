import PrimaryTitle from "../../../UI/PrimaryTitle/PrimaryTitle";


const states = [
    {
        title: 'Students',
        value: '15k+',
    },
    {
        title: 'Total Success',
        value: '75%',
    },
    {
        title: 'Main Questions',
        value: '35',
    },
    {
        title: 'Chief experts',
        value: '26',
    },
    {
        title: 'Years of experience',
        value: '16',
    },
]

export default function Success() {
  return (
    <div className="flex flex-col gap-10 px-10">
        <PrimaryTitle
        headingPart1={"Our"}
        headingPart2={"Success"}
        style={'text-center'}
        subtext={
          "Ornare id fames interdum porttitor nulla turpis etiam. Diam vitae sollicitudin at nec nam et pharetra gravida. Adipiscing a quis ultrices eu ornare tristique vel nisl orci."
        }
      />
      <div className="flex flex-col lg:flex-row gap-10 justify-between items-center">
        {
            states.map((item, index) => <div key={index} className="flex flex-col gap-2 items-center w-full">
                <span className="text-6xl text-[#49BBBD]">{item.value}</span>
                <span className="text-lg">{item.title}</span>
            </div>)
        }
      </div>
    </div>
  )
}
