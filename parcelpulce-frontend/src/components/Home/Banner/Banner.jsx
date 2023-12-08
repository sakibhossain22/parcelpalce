import { useSpring, animated } from 'react-spring';
const Banner = () => {
    const props = useSpring({
        marginLeft : '0',
        from: {  marginLeft : '700px' },
        config: { duration: 500 },
    });
    return <div>
        <div className="hero h-[60vh]" style={{ backgroundImage: 'url(https://i.ibb.co/2MRbMF1/online-shopping-on-phone-buy-sell-business-digital-web-banner-application-money-advertising-payment.jpg)' }}>
            <div className="hero-overlay bg-opacity-50"></div>
            <div className="hero-content text-center text-neutral-content">
                <animated.div style={props}>
                    <div>
                        <h1 className="lg:text-5xl text-3xl font-bold text-white leading-tight my-5"> Fast And Quick <br /><span className="text-red-600">Delivery</span> Service</h1>
                        <form>
                            <div className="flex">
                                <input type="text" placeholder="Type here" className="py-3 px-2 rounded-tl rounded-bl text-black w-full max-w-xs" />
                                <button className="bg-[#dc3545] rounded-tr rounded-br px-5">Search</button>
                            </div>
                        </form>
                    </div>
                </animated.div>;
            </div>
        </div>
    </div>



};

export default Banner;
