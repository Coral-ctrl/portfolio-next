const journey = [
    {
        years: "2025 - Present",
        role: "Mentee",
        institution: "AWS She Builds Mentorship Program",
    },
    {
        years: "2025 - Present",
        role: "Student",
        institution: "Code Like a Girl",
    },
    {
        years: "2024 - 2025",
        role: "Research Assistant",
        institution: "The Chinese University of Hong Kong",
    },
    {
        years: "2021 - 2025",
        role: "Early Childhood Teacher & Aboriginal and Torres Strait Islander Educational Coordinator",
        institution: "Early Childhood Centres",
    },
    {
        years: "2019 - 2020",
        role: "Master of Teaching (Early Childhood)",
        institution: "University of Melbourne",
    },
    {
        years: "2018",
        role: "Working Holiday (Gap Year)",
        institution: "Australia",
    },
    {
        years: "2015 - 2017",
        role: "Metrology Engineer",
        institution: "Guangzhou Institute of Measurement and Testing Technology",
    },
    {
        years: "2011 - 2015",
        role: "Bachelor of Engineering (Surveying)",
        institution: "Guangdong University of Technology",
    },
]

const Journey = () => {
    return (
        <div className="flex flex-col">
            <h2 className="h2 mb-8">
                Education & <span className="text-accent">Experience</span>
            </h2>
            {
                journey.map((item, index) => {
                    const {institution, role, years} = item;
                    return (
                        <div key={index} className="flex items-center gap-12 w-full">
                            {/* bullets */}
                            <div className="flex flex-col w-max justify-center items-center">
                                <div className="w-3 h-3 bg-accent rounded-full"></div>
                                <div className="w-[1px] h-[180px] bg-journey/10"></div>
                            </div>
                            {/* text */}
                            <div className="max-w-[500px]">
                                <p className="mb-6 text-lg text-journey/50">{years}</p>
                                <h4 className="h4 mb-2 text-journey">{role}</h4>
                                <p className="text-lg text-journey/50">{institution}</p>
                            </div>
                        </div>
                    );
                })
            }
        </div>
    );
};

export default Journey;