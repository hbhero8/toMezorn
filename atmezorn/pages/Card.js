import datas from "../data/data.json"
import NextNprogress from 'nextjs-progressbar';

export default function Card() {
    return (
        <div className="mt-4 ml-4 lg:grid lg:grid-cols-3">
            {datas.map(data => {
                return (
                    <div className=" flex lg:block mt-5 ml-5 mr-5 rounded-lg ">
                        <img className=" flex-initial  w-full rounded-bl-3xl rounded-tl-3xl  lg:rounder-tl-3xl lg:rounder-tr-3xl" src={data.image}></img>
                        <div className="px-4 flex-initial  bg-white rounded-br-3xl rounded-tr-3xl lg:rounder-bl-3xl lg:rounder-br-3xl ">
                            <NextNprogress
                                color="#29D"
                                startPosition={0.3}
                                stopDelayMs={200}
                                height={3}
                                showOnShallow={true}
                                options={{ easing: 'ease', speed: 500 }}
                            />
                            {data.progress}
                            <h2 className=" mt-3 font-bold">{data.title}</h2>
                            <p className="font-medium mt-5 hidden lg:block">{data.paragraph}</p>
                            <div className="mt-5 flex justify-between">
                                <p className="flex-initial"> Written by <b>{data.writer}</b> </p>
                                <p className="flex-initial">Seen by <b>{data.seen}</b></p>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>


    )
}