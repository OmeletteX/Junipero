import React from 'react';

const heading = 'TAKE ACTION';

const data = [
    {
        header: 'REDUCE ENERGY CONSUMPTION',
        point: 'Use energy-efficient appliances, turn off lights when not in use, and consider solar panels to reduce your electricity consumption. Small changes can lead to significant energy savings.',
    },
    {
        header: 'DRIVE LESS, USE ALTERNATIVE TRANSPORTATION',
        point: 'Opt for public transport, carpooling, biking, or walking when possible. Fewer cars on the road mean lower emissions and reduced air pollution.',
    },
    {
        header: 'MINIMISE WATER USAGE',
        point: 'Fix leaks, install low-flow fixtures, and be mindful of water consumption in daily activities. Water conservation reduces energy use and lowers your carbon footprint.',
    },
    {
        header: 'REDUCE, REUSE, RECYCLE',
        point: 'Cut down on single-use items, recycle materials like paper, glass, and plastic, and find creative ways to reuse items. Reducing waste helps conserve resources and reduce landfill emissions.',
    },
    {
        header: 'SUPPORT RENEWABLE ENERGY',
        point: 'Choose energy providers that offer renewable energy options, such as wind or solar power. Supporting clean energy sources reduces reliance on fossil fuels.',
    },
    {
        header: 'PLANT TREES & GREENERY',
        point: 'Trees absorb carbon dioxide and provide oxygen. Planting trees, shrubs, and maintaining green spaces can enhance local air quality and combat climate change.',
    },
    {
        header: 'REDUCE MEAT & DAIRY CONSUMPTION',
        point: 'Consider incorporating more plant-based meals into your diet. Reducing meat and dairy consumption can lower greenhouse gas emissions associated with livestock production.',
    },
    {
        header: 'ADVOCATE FOR SUSTAINABLE POLICIES',
        point: 'Support and engage with organizations and policies aimed at addressing climate change. Advocacy can help drive systemic change for a more sustainable future.',
    },
];

const Actions = () => {
    const backgroundStyle = {
        backgroundImage: `url('/ActionsBackground.png')`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center',
    };

    const halfDataLength = Math.ceil(data.length / 2); // Calculate the halfway point

    const firstHalfData = data.slice(0, halfDataLength);
    const secondHalfData = data.slice(halfDataLength);

    return (
        <div style={backgroundStyle}>
            <div id="Impacts" className="container max-w-screen-xl mx-auto flex flex-col justify-center items-center min-h-screen px-10 md:px-40">
                <div className="hidden md:grid md:grid-cols-4 gap-14 justify-items-center">
                    {firstHalfData.map((item, index) => (
                        <div key={index} className="md:col-span-1 bg-black bg-opacity-50 py-12 px-6 rounded-3xl">
                            <div className="mb-1 text-base text-textColorPrimary ">
                                {item.header}
                            </div>
                            <div className="text-sm text-textColorSecondary">
                                {item.point}
                            </div>
                        </div>
                    ))}
                </div>
                <h1 style={{ letterSpacing: '0.5rem' }} className="text-2xl text-textColorPrimary my-10 text-center">
                    {heading}
                </h1>
                <div className="grid md:grid-cols-4 gap-4 md:gap-14 justify-items-center">
                    {secondHalfData.map((item, index) => (
                        <div key={index} className="md:col-span-1 bg-black bg-opacity-50 py-4 md:py-12 px-6 rounded-3xl">
                            <div className="mb-1 text-base text-textColorPrimary ">
                                {item.header}
                            </div>
                            <div className="text-sm text-textColorSecondary">
                                {item.point}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Actions;