import { SectionContainer } from "@components/Section";
import { Icon } from "@iconify/react";
import { v4 as uuid } from "uuid";

const ColumnData = [
    {
        id: uuid(),
        title: "Person 1",
        icon: "carbon:user-avatar-filled-alt",
        content:
            "User feedback is very important to us! Contact us anytime! Please share your experiences using VocabNotion."
    },
    {
        id: uuid(),
        title: "Person 2",
        icon: "carbon:user-avatar-filled-alt",
        content:
            "User feedback is very important to us! Contact us anytime! Please share your experiences using VocabNotion."
    },
    {
        id: uuid(),
        title: "Person 3",
        icon: "carbon:user-avatar-filled-alt",
        content:
            "User feedback is very important to us! Contact us anytime! Please share your experiences using VocabNotion."
    },
    {
        id: uuid(),
        title: "Person 4",
        icon: "carbon:user-avatar-filled-alt",
        content:
            "User feedback is very important to us! Contact us anytime! Please share your experiences using VocabNotion."
    }
];

export const Columns = () => {
    return (
        <SectionContainer className="benefits-lists grid gap-x-8 gap-y-16 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-16">
            {ColumnData.map((item) => (
                <div
                    id={item.id}
                    key={item.id}
                    className="benefits-list--item text-[#737373] text-left"
                >
                    <Icon icon={item.icon} className="mb-4 w-10 h-10 my-2" />
                    <h3 className="text-xl mb-2 font-medium text-black">
                        {item.title}
                    </h3>
                    <p>{item.content}</p>
                    <o className="flex">
                        <Icon
                            icon="solar:star-bold"
                            className="h-10 mr-1 text-secondary-500"
                        />
                        <Icon
                            icon="solar:star-bold"
                            className="h-10 mr-1 text-secondary-500"
                        />
                        <Icon
                            icon="solar:star-bold"
                            className="h-10 mr-1 text-secondary-500"
                        />
                        <Icon
                            icon="solar:star-bold"
                            className="h-10 mr-1 text-secondary-500"
                        />
                        <Icon
                            icon="solar:star-bold"
                            className="h-10 mr-1 text-secondary-500"
                        />
                    </o>
                </div>
            ))}
        </SectionContainer>
    );
};
