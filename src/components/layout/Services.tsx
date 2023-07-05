import Image from 'next/image';
import * as React from 'react';

export default function Services() {
  const cardDefinitions = [
    {
      title: 'Product',
      image: '/images/product.png',
      description:
        'Coffee + Code + Time + Talent = Awesome products. \nWe build products you will love using the best technologies and frameworks for each use case.',
      branches: [
        {
          title: 'Frontend',
        },
        {
          title: 'Backend',
        },
        {
          title: 'Infrastructure',
        },
        {
          title: 'Desktop',
        },
        {
          title: 'Mobile',
        },
        {
          title: 'Plugins',
        },
        {
          title: 'Videogames',
        },
      ],
    },
    {
      title: 'Web 3',
      image: '/images/web3.png',
      listOfItems: [''],
      description:
        'Building the future of economy one block at a time! Sprinkling decentralized magic and smart contracts all over the digital realm.',
      branches: [
        {
          title: 'Solidity',
        },
        {
          title: 'Plutus',
        },
        {
          title: 'Nami',
        },
        {
          title: 'Web3.js',
        },
        {
          title: 'Ethers.js',
        },
        {
          title: 'Worldcoin',
        },
        {
          title: 'Chainlink',
        },
        {
          title: 'Charli3',
        },
      ],
    },
    {
      title: 'AI/Prompt',
      image: '/images/ml.png',
      listOfItems: [''],
      description:
        'We turn prompts into spells, and algorithms into potions, for the benefit of your business.',
      branches: [
        {
          title: 'ML',
        },
        {
          title: 'DL',
        },
        {
          title: 'Data engineering',
        },
        {
          title: 'Dall.E',
        },
        {
          title: 'Midjourney',
        },
        {
          title: 'Kaiber',
        },
        {
          title: 'GPT-4',
        },
      ],
    },
  ];

  return (
    <>
      <section
        className='border-dashed-2 flex min-h-screen w-screen flex-col items-center justify-center border-b border-white bg-black pb-4 text-white'
        id='services'
      >
        <h2 className='fun-text-shadow text-center'>
          World class products engineering
        </h2>
        <div className='mx-auto flex max-w-7xl flex-wrap px-4 sm:px-6 lg:px-8'>
          {cardDefinitions.map((cardDefinition) => {
            return (
              <div
                className='service-card relative m-2 flex flex-1 rounded-md border-2 border-solid border-white p-5'
                key={cardDefinition.title}
              >
                <div className='righteous service-card-description flex flex-1  flex-col justify-between rounded-lg p-10'>
                  <div className='flex items-center'>
                    <div className='flex-1'>
                      <h1 className='service-title text-3xl'>
                        {cardDefinition.title}
                      </h1>
                    </div>
                    <div>
                      <Image
                        src={cardDefinition.image}
                        width={50}
                        height={50}
                        alt={cardDefinition.title}
                      />
                    </div>
                  </div>
                  <div className='cutive service-description text-md mt-3'>
                    {cardDefinition.description}
                  </div>
                  <div className='mt-3 flex flex-wrap'>
                    {cardDefinition.branches.map((branch) => {
                      return (
                        <div
                          className='cutive branch-card m-1 flex min-w-max flex-1 cursor-pointer flex-col items-center justify-center rounded-none border-2 border-solid border-white p-2 pb-1 pt-1 hover:border-black hover:bg-white hover:text-black'
                          key={branch.title}
                        >
                          {branch.title}
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}
