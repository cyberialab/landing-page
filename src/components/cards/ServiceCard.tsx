import Image from 'next/image';
import * as React from 'react';

type ServiceCardProps = {
  title: string;
  image: string;
  listOfItems: string[];
  description: string;
  techStack: string[];
} & React.ComponentPropsWithRef<'div'>;

const ServiceCard = React.forwardRef<HTMLButtonElement, ServiceCardProps>(
  ({ title, image, listOfItems, description }) => {
    return (
      <div className='service-card flex rounded-md border border-solid border-white shadow-md'>
        <div>
          <div>
            <h1 className='service-card-title'>{title}</h1>
          </div>
          <div>
            <Image src={image} alt={title} />
          </div>
          <div> {description} </div>
        </div>
        <div className='service-description'>
          <div className='service-description-front'>
            <div> {description} </div>
            <div>
              <ul>
                {listOfItems.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className='service-description-back'>
            <div>Tech stack</div>
          </div>
        </div>
      </div>
    );
  }
);

export default ServiceCard;
