import Head from 'next/head';
import Image from 'next/image'

const Purchase = () => {
    return (
        <div className="bg-[#f3f5f8] min-h-screen flex flex-col items-center justify-center">
            <Head>
                <title>Buy Notion Templates</title>
                <meta name="description" content="Get your Notion templates from two different providers." />
            </Head>
            <h1 className="text-4xl font-bold mb-10 text-gray-800 text-center">Choose your platform to purchase VocabNotion</h1>
            <div className="flex flex-col items-center gap-6">
                <a
                    href="https://frekans7.lemonsqueezy.com/buy/790012c3-c837-4a4b-be1f-0401d467b019"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#7047eb] text-white font-semibold py-3 px-12 rounded flex items-center gap-2"
                >

                    Buy from Lemon Squeezy
                    <Image
                        width="19"
                        height="32"
                        alt="Lemon Squeezy"
                        src="lemonsqeezy.png" />
                </a>
                <a
                    href="https://notioninsider.com/template/vocabnotion"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#0066ff] text-white font-semibold py-3 px-12 rounded flex items-center gap-2"
                >
                    Buy from Notion Insider
                    <Image
                        width="35"
                        height="40"
                        alt="Notion Insider"
                        src="notioninsider.png" />
                </a>

            </div>
        </div>
    );
}
export default Purchase;