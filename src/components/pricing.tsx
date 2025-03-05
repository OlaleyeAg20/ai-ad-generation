import React from 'react';
import { Nunito } from "next/font/google";
import clsx from "clsx";

const nunito = Nunito({
    variable: '--font-nunito',
    subsets: ['latin'],
});

export default function Pricing() {

    const pricing = [
        {id: 1, title: 'Starter', description: "Get a few features to start your Adgen-ai journey.", price: "Free", features: ['5 ads per month', 'Watermarked exports', 'Limited selection of templates', 'Standard resolution only (720p)']},

        {id: 2, title: 'Basic', description: "Get full usage of the generator ", price: '$30', features: ['Unlimited generated ads', 'No Watermarked exports', 'Access to premium templates', 'Exports in HD quality (1080p)']},

        {id: 3, title: 'Teams', description: "A full package for a 3-4 membered team", price: '$50', features: ['Unlimited generated ads', 'Share with team members', 'Team brand kit integration', '4K resolution & custom export options']},
    ];

    return (
        <div className={clsx("w-full py-16 px-4 md:px-6 lg:px-8 relative overflow-hidden", nunito.variable)}>
            <div className='max-w-7xl mx-auto text-center space-y-8'>

                <div className='space-y-4'>
                    <h3 className='text-[#B800B8] font-bold text-lg'>UNLOCK THE FULL POTENTIAL OF AI-ADGEN</h3>
                    <h1 className='text-4xl font-semibold'>Pricing Plans</h1>
                    <p className='text-gray-600'> Generate your ads for free and pay as you grow</p>
                </div>

                {/* Card */}
                <div className='grid grid-cols-1 md:grid-cols-3 gap-8 mt-5 justify-center'>
                    {pricing.map((plan, index) => (
                        <div key={plan.id} className={clsx('p-5 rounded-2xl w-[381px] h-[539px] flex flex-col justify-between', index === 1 ? 'bg-[#B800B8] text-white' : 'bg-white text-black')}>
                            <div className='space-y-5'>
                                <div>
                                    <h2 className={clsx('text-2xl font-semibold', index === 1 ? 'text-white' : 'text-[#B800B8]')}>{plan.title}</h2>
                                    <p className='text-gray-500'>{plan.description}</p>
                                </div>
                                <h3 className={clsx('border-b-[0.5px] pb-3 text-2xl font-semibold', index === 1 ? 'border-white' : 'border-gray-300 text-[#B800B8]')}>{plan.price} {plan.price !== "Free" && (
                                        <span className="text-base">/mo</span>
                                    )}</h3>
                                <ul className='space-y-2'>
                                    {plan.features.map((feature, index) => (
                                        <li key={index} className="flex items-center gap-2">✓ {feature}</li>
                                    ))}
                                </ul>
                            </div>
                            <div className='flex justify-center mt-8'>
                                <button className={clsx('p-3 rounded-lg font-medium ', index === 1 ? 'bg-white text-[#B800B8]' : 'bg-[#B800B8] text-white')}>Choose plan</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
