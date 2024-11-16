
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { useNavigate } from 'react-router-dom';
import Marquee from 'react-fast-marquee';

gsap.registerPlugin(ScrollTrigger);

const logos = [
    {
        src: "https://framerusercontent.com/images/0JK6VZUNq8mfqDUtWgK35xYvsB8.png",
        alt: "logo-1",
    },
    {
        src: "https://framerusercontent.com/images/S6TWHP8Kzk16GiIKW4b4OxkTM.png",
        alt: "logo-2",
    },
    {
        src: "https://framerusercontent.com/images/gf8HHPsxOYhbYFBiexIJZylYHE.png?scale-down-to=512",
        alt: "logo-3",
    },
    {
        src: "https://framerusercontent.com/images/r6lYrbeId7sQdzKrFUmzdCB2BI.png?scale-down-to=512",
        alt: "logo-4",
    }


];

function Home() {
    const navigate = useNavigate()
    useGSAP(() => {
        // Hero section animation
        gsap.from('.hero-content > *', {
            opacity: 0,
            y: 50,
            duration: 1,
            stagger: 0.2,
            ease: "power3.out"
        });

        // Features animation
        gsap.from('.feature-card', {
            scrollTrigger: {
                trigger: '.features-section',
                start: "top center",
                toggleActions: "play none none reverse"
            },
            opacity: 0,
            y: 30,
            duration: 0.8,
            stagger: 0.2
        });

        // Pricing cards animation
        gsap.from('.pricing-card', {
            scrollTrigger: {
                trigger: '.pricing-section',
                start: "top center",
                toggleActions: "play none none reverse"
            },
            opacity: 0,
            y: 30,
            duration: 0.8,
            stagger: 0.2
        });

        // FAQ animation
        gsap.from('.faq-item', {
            scrollTrigger: {
                trigger: '.faq-section',
                start: "top center",
                toggleActions: "play none none reverse"
            },
            opacity: 0,
            y: 20,
            duration: 0.6,
            stagger: 0.15
        });
    });

    return (
        <div className="min-h-screen bg-slate-100">
            {/* Navigation */}
            <nav className=" nav-section fixed w-full  bg-white/80 backdrop-blur-md z-50 shadow-sm">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                    <div className="flex justify-between items-center">
                        <div className="text-2xl font-bold text-slate-800">FaceSearchAI</div>
                        <div className="hidden md:flex space-x-8">
                            <a href="#features" className="text-slate-600 hover:text-slate-900">Features</a>
                            <a href="#pricing" className="text-slate-600 hover:text-slate-900">Pricing</a>
                            <a href="#faq" className="text-slate-600 hover:text-slate-900">FAQ</a>
                        </div>
                        <button onClick={() => navigate('/register')} className="bg-slate-900 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors">
                            Use AI
                        </button>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <section className="pt-40 pb-20 px-4">
                <div className="hero-content max-w-7xl mx-auto text-center">
                    <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6  ">
                        Use a single photo to find all the images of yourself on the internet.
                    </h1>
                    <p className="text-xl text-slate-600 mb-8 max-w-3xl mx-auto">
                        100s of Million People Seek Help Daily on Social Media. Let us help you find them.
                    </p>
                    <div className="flex justify-center gap-4">
                        <button className="bg-slate-900 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-green-700 transition-colors">
                            Get started
                        </button>
                        <button className="border-2 border-slate-200 text-slate-800 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-slate-100 transition-colors">
                            See features
                        </button>
                    </div>
                    <div className="mt-12 text-slate-600">
                        <p className="mb-4">Trusted by 2k+ Users! 🍀</p>
                        <div className="flex justify-center items-center space-x-4">
                            {/* Add user avatars or trust indicators here */}
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section id="features" className="features-section py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4">
                    <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-900 mb-12">
                        Powerful Feature
                    </h2>
                    <div className="grid md:grid-cols-3  gap-8">
                        <div className="feature-card p-6 rounded-xl bg-slate-100 hover:shadow-lg transition-shadow">
                            <div className="text-orange-500 text-4xl mb-4">🎯</div>
                            <h3 className="text-xl font-semibold mb-3">Face Search</h3>
                            <p className="text-slate-600">Use a single photo to find all the images of yourself on the internet.</p>
                        </div>
                        <div className="feature-card p-6 rounded-xl bg-slate-100 hover:shadow-lg transition-shadow">
                            <div className="text-orange-500 text-4xl mb-4">
                                <img className='w-10 h-10 rounded-full' src="https://facesearchai.com/images/customer.gif" alt="" />
                            </div>
                            <h3 className="text-xl font-semibold mb-3">Contact Details</h3>
                            <p className="text-slate-600">Get Email and Phone Number of an Individual using Name.</p>
                        </div>
                        <div className="feature-card p-6 rounded-xl bg-slate-100 hover:shadow-lg transition-shadow">
                            <div className="text-orange-500 text-4xl mb-4">
                                <img className='w-10 h-10 rounded-full' src="https://facesearchai.com/images/user.gif" alt="" />
                            </div>
                            <h3 className="text-xl font-semibold mb-3">GPT Research</h3>
                            <p className="text-slate-600">Get to Know about someone their Name, Topics to Discuss with an customized poem.</p>
                        </div>

                    </div>
                </div>
            </section>

            {/* Pricing Section */}
            <section id="pricing" className="pricing-section py-20 bg-slate-100">
                <div className="max-w-7xl mx-auto px-4">
                    <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-900 mb-12">
                        Simple, Transparent Pricing
                    </h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="pricing-card bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-shadow">
                            <h3 className="text-xl font-semibold mb-4">Starter</h3>
                            <div className="text-4xl font-bold mb-4">$29<span className="text-lg text-slate-500">/mo</span></div>
                            <ul className="space-y-3 mb-8">
                                <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> 100 leads/month</li>
                                <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Basic analytics</li>
                                <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Email support</li>
                            </ul>
                            <button className="w-full py-2 border-2 border-slate-900 text-slate-900 rounded-lg hover:bg-orange-50 transition-colors">
                                Get Started
                            </button>
                        </div>
                        <div className="pricing-card bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-shadow border-2 border-slate-900">
                            <h3 className="text-xl font-semibold mb-4">Professional</h3>
                            <div className="text-4xl font-bold mb-4">$79<span className="text-lg text-slate-500">/mo</span></div>
                            <ul className="space-y-3 mb-8">
                                <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> 500 leads/month</li>
                                <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Advanced analytics</li>
                                <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Priority support</li>
                                <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Custom integrations</li>
                            </ul>
                            <button className="w-full py-2 bg-slate-900 text-white rounded-lg hover:bg-green-700 transition-colors">
                                Get Started
                            </button>
                        </div>
                        <div className="pricing-card bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-shadow">
                            <h3 className="text-xl font-semibold mb-4">Enterprise</h3>
                            <div className="text-4xl font-bold mb-4">$199<span className="text-lg text-slate-500">/mo</span></div>
                            <ul className="space-y-3 mb-8">
                                <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Unlimited leads</li>
                                <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Custom analytics</li>
                                <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> 24/7 support</li>
                                <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> API access</li>
                            </ul>
                            <button className="w-full py-2 border-2 border-slate-900 text-slate-900 rounded-lg hover:bg-green-50 transition-colors">
                                Contact Sales
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Companies Section */}
            <section className="py-8 bg-white">
                <div className="max-w-7xl mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center text-slate-900 mb-4">
                        Trusted By
                    </h2>
                    <Marquee  gradientColor="white" gradient={true} speed={50} gradientWidth={200}>
                        {logos.map((logo, index) => (
                            <div key={index} className="w-[150px]">
                                <img  className="object-cover  w-[100px] " src={logo.src} alt={logo.alt} />
                            </div>
                        ))}
                    </Marquee>
                </div>
            </section>

            {/* FAQ Section */}
            <section id="faq" className="faq-section py-20 bg-slate-100">
                <div className="max-w-3xl mx-auto px-4">
                    <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-900 mb-12">
                        Frequently Asked Questions
                    </h2>
                    <div className="space-y-6">
                        <div className="faq-item bg-white p-6 rounded-lg">
                            <h3 className="text-lg font-semibold mb-2">How does FaceSearchAI work?</h3>
                            <p className="text-slate-600">FaceSearchAI uses advanced AI algorithms to scan social media platforms and identify face.</p>
                        </div>
                        <div className="faq-item bg-white p-6 rounded-lg">
                            <h3 className="text-lg font-semibold mb-2">Is my data secure?</h3>
                            <p className="text-slate-600">Yes, we take data security seriously. All data is encrypted and stored securely following industry best practices.</p>
                        </div>
                        <div className="faq-item bg-white p-6 rounded-lg">
                            <h3 className="text-lg font-semibold mb-2">How does FaceSearchAI work?</h3>
                            <p className="text-slate-600">FaceSearchAI uses advanced AI algorithms to scan social media platforms and identify face.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-slate-900 text-slate-400 py-12">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="grid md:grid-cols-4 gap-8">
                        <div>
                            <h3 className="text-white text-lg font-semibold mb-4">FaceSearchAI</h3>
                            <p className="text-sm">Revolutionizing lead generation through AI-powered  scanning.</p>
                        </div>
                        <div>
                            <h4 className="text-white text-sm font-semibold mb-4">Product</h4>
                            <ul className="space-y-2 text-sm">
                                <li><a href="#features" className="hover:text-white">Features</a></li>
                                <li><a href="#pricing" className="hover:text-white">Pricing</a></li>
                                <li><a href="#faq" className="hover:text-white">FAQ</a></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-white text-sm font-semibold mb-4">Company</h4>
                            <ul className="space-y-2 text-sm">
                                <li><a href="#" className="hover:text-white">About</a></li>
                                <li><a href="#" className="hover:text-white">Blog</a></li>
                                <li><a href="#" className="hover:text-white">Careers</a></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-white text-sm font-semibold mb-4">Legal</h4>
                            <ul className="space-y-2 text-sm">
                                <li><a href="#" className="hover:text-white">Privacy</a></li>
                                <li><a href="#" className="hover:text-white">Terms</a></li>
                                <li><a href="#" className="hover:text-white">Security</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="border-t border-slate-800 mt-12 pt-8 text-sm text-center">
                        © 2024 FaceSearchAI. All rights reserved.
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default Home;