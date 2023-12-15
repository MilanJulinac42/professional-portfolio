import Navbar from "@/app/layout/Nav/Nav";
import Footer from "@/app/layout/Footer/Footer";
import NavbarMobile from "@/app/layout/Nav/NavMobile";
import Hero from "@/app/layout/Hero/Hero";
import WhatIDo from "@/app/layout/WhatIDo/WhatIDo";
import Container from "@/app/layout/Container/Container";

const work = () => {
    return (
        <div>
            {/* <NavbarMobile /> */}
            <Container title="What I do">
                <WhatIDo />
            </Container>
            {/* <Footer /> */}
        </div>
    );
};

export default work;
