import React from 'react';

const heading = 'ABOUT CLIMATE CHANGE';
const content =
    "Climate change refers to the long-term alteration in Earth's average weather patterns. It involves shifts in temperature, precipitation, and wind patterns, and it can affect ecosystems, sea levels, and weather events. While climate change is a natural process, the current changes are happening at an accelerated pace largely due to human activities, such as the burning of fossil fuels, deforestation, and industrial processes. The primary driver of recent climate change is the increase in greenhouse gases, like carbon dioxide, in the Earth's atmosphere. This enhanced greenhouse effect traps more heat, causing the planet to warm.\n" +
    "\n" +
    "The consequences of climate change are far-reaching and include more frequent and severe weather events, rising sea levels, disruptions in agriculture, and threats to biodiversity. It's crucial for us to understand these changes and take action to mitigate their impacts, adapt to the new realities, and work toward a more sustainable future. By reducing greenhouse gas emissions and adopting environmentally friendly practices, we can help combat the challenges posed by climate change.\n";

const About = () => {
    const backgroundStyle = {
        backgroundImage: `url('/AboutBackground.png')`, // Adjust the path to your image
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center',
        position: 'relative',
    };


    return (
        <div style={backgroundStyle}>
            <div id="About" className="container max-w-screen-xl mx-auto  flex items-center  min-h-screen">
                {/* About content */}
                <div className="px-10 py-20 md:px-40 ">
                    {/* About headline */}
                    <h1 style={{ letterSpacing: '0.5rem' }} className="text-2xl text-textColorPrimary mb-10">
                        {heading}
                    </h1>
                    {/* About content */}
                    <p className="text-sm md:text-lg text-textColorQuaternary lg:w-3/4 xl:w-2/3 whitespace-pre-line">
                        {content}
                    </p>
                </div>
        </div>

        </div>
    );
};

export default About;
