import { SectionContainer } from "@components/Section";
import { Icon } from "@iconify/react";
import Image from "next/image";
import { v4 as uuid } from "uuid";

const ContentImageData = [
    {
        id: uuid(),
        title: "Effortless Learning",
        content:
            "Say goodbye to vocabulary learning stress. VocabNotion makes learning vocabulary easy! Our user-friendly Notion template enables you to effortlessly review words using the Leitner system on customized flashcards. The cards also include the audio pronunciation of the word you will learn. ",
        align: "right",
        image: "./vocabnotion1.png"
    },
    {
        id: uuid(),
        title: "Word Lists",
        content:
            'In VocabNotion, we have created two word lists: "myWords" and "800words" in Databases. In myWords, we have created a customized template so that you can add and study the words you want. 800words contains 800 essential words in English, carefully selected by "Professor Stuart Webb".',
        align: "left",
        image: "./vocabnotion2.png"
    }
];

export const ContentImage = () => {
    return (
        <SectionContainer className="process-items mt-16 space-y-16">
            {ContentImageData.map((item) => (
                <div
                    id={item.id}
                    key={item.id}
                    className="process-item--container grid md:grid-cols-2 gap-y-8"
                >
                    <div
                        className={`process-item--image rounded-3xl ${item.align === "left" ? "md:order-1" : ""
                            }`}
                    >
                        <Image
                            src={item.image}
                            width={512}
                            height={512}
                            style={{ objectFit: "cover" }}
                            alt="Process Banner 1"
                            className="drop-shadow-xl w-full offset-y-0 offset-x-8 blur-16"
                        />
                    </div>
                    <div
                        className={`process-item--content ${item.align === "left"
                            ? "md:pr-16 lg:pr-24 xl:pr-32 ml-auto"
                            : "md:pl-16 lg:pl-24 xl:pl-32  mr-auto"
                            } my-auto content text-black/60`}
                    >
                        <h3 className="mb-6 h4 md:h3 font-semibold text-black">
                            {item.title}
                        </h3>
                        <p>{item.content}</p>
                        <ul className="process-item--list space-y-3">
                            {item.listItems?.length &&
                                item.listItems.map((listItem) => (
                                    <li
                                        id={listItem.id}
                                        key={listItem.id}
                                        className="inline-grid grid-flow-col-dense"
                                    >
                                        <Icon
                                            icon="ph:seal-check-bold"
                                            className="w-6 h-6 text-secondary-500 mr-2"
                                        />
                                        {listItem.content}
                                    </li>
                                ))}
                        </ul>
                    </div>
                </div>
            ))}
        </SectionContainer>
    );
};
