import React from 'react';

const heading = 'IMPACTS OF CLIMATE CHANGE';

const header1 = 'WATER STRESS';
const header2 = 'DISPLACED PEOPLE';
const header3 = 'ECONOMIC COST';
const header4 = 'SPECIES EXTINCTION';
const header5 = 'INCREASE HEATWAVE';
const header6 = 'SEA LEVEL RISE';

const point1 = 'By 2050, more than half of the world\'s population, roughly\n50%, might struggle with water shortages because of\nchanging rainfall patterns.';
const point2 = 'Over 200 million people could be left homeless by 2050\ndue to climate-related impacts.';
const point3 = 'Climate change might lead to a loss of 0.7% of the world\'s\nannual economic output by 2100, which is equivalent to\ntrillions of dollars.';
const point4 = 'The rate of species disappearing from the planet could be\nas much as 10,000 times higher than the natural rate by\n2100, endangering various forms of life.';
const point5 = 'By 2050, some regions could see a rise of over 50% in\nextremely hot days, which could make heatwaves more\nfrequent and intense.';
const point6 = 'Rising sea levels could result in countries like the\nMaldives, Bangladesh, and parts of the Netherlands\nexperiencing more frequent and severe coastal flooding.';



const Impacts = () => {
    const backgroundStyle = {
        backgroundImage: `url('/ImpactsBackground.png')`, // Adjust the path to your image
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center',
    };

    return (
        <div style={backgroundStyle}>
            <div id="Impacts" className="container max-w-screen-xl mx-auto flex flex-col justify-center items-center min-h-screen py-20 md:py-0">
                {/* About content */}
                <h1 style={{ letterSpacing: '0.5rem' }} className="text-2xl text-textColorPrimary mb-10 md:mb-20 text-center">
                    {heading}
                </h1>

                {/* Grid container */}

                <div className="grid md:grid-cols-12 w-full ">


                    <div className="  md:ml-10 md:col-span-1 md:col-start-2 text-center mb-6 md:mb-0">
                    <div className="mb-1 text-base text-textColorSecondary underline whitespace-nowrap">
                        {header1}
                    </div>
                    <div className=" text-sm text-textColorSecondary whitespace-pre">
                        {point1}
                    </div>
                    </div>

                    <div className="   md:col-span-1 md:col-start-9 text-center mb-6 md:mb-0">
                        <div className="mb-1 text-base text-textColorSecondary underline whitespace-nowrap">
                            {header2}
                        </div>
                        <div className=" text-sm text-textColorSecondary whitespace-pre">
                            {point2}
                        </div>
                    </div>

                    <div className="  md:mt-20  md:col-span-1 md:col-start-2 text-center mb-6 md:mb-0">
                        <div className="mb-1 text-base text-textColorSecondary underline whitespace-nowrap">
                            {header5}
                        </div>
                        <div className=" text-sm text-textColorSecondary whitespace-pre">
                            {point5}
                        </div>
                    </div>

                    <div className=" md:mt-20 md:ml-16 md:col-span-1 md:col-start-9 text-center mb-6 md:mb-0">
                        <div className="mb-1 text-base text-textColorSecondary underline whitespace-nowrap">
                            {header3}
                        </div>
                        <div className=" text-sm text-textColorSecondary whitespace-pre">
                            {point3}
                        </div>
                    </div>

                    <div className=" md:mt-20 md:ml-16 md:col-span-1 md:col-start-2 text-center mb-6 md:mb-0">
                        <div className="mb-1 text-base text-textColorSecondary underline whitespace-nowrap">
                            {header6}
                        </div>
                        <div className=" md:mb-20 text-sm text-textColorSecondary whitespace-pre">
                            {point6}
                        </div>
                    </div>


                    <div className=" md:mt-20 md:ml-2  md:col-span-1 md:col-start-9 text-center mb-6 md:mb-0">
                        <div className="mb-1 text-base text-textColorSecondary underline whitespace-nowrap">
                            {header4}
                        </div>
                        <div className=" md:mb-20 text-sm text-textColorSecondary whitespace-pre">
                            {point4}
                        </div>
                    </div>










                </div>
            </div>
        </div>
    );
};

export default Impacts;
