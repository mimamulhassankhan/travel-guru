import { Image, Text } from '@fluentui/react';
import { Card } from '@uifabric/react-cards';
import React from 'react';

const RoomDetails = ({data}) => {
    const {name, isAirKitchen, isCancellable, photo} = data;
    const { guests, bedrooms, beds, bathrooms} = data.specs;
    const { point, totalReviews} = data.review;
    const { perNight, total} = data.price;
    
    return (
        
        <Card style={{minWidth: 500}} className="mt-3 shadow rounded" horizontal >
            <Card.Item fill>
                <Image width={180} className="rounded" src={photo} alt="Placeholder image." />
            </Card.Item>
            <Card.Item fill>
                <Card.Section >
                    <Text className="font-weight-bold" variant="large">{name}</Text>
                </Card.Section>
                <Card.Section>
                    <Text  variant="medium" className="d-flex justify-content-between text-muted">
                        <p>{guests} guests</p>
                        <p className="ml-3">{bedrooms} bedrooms</p>
                        <p className="ml-3">{beds} beds</p>
                        <p className="ml-3">{bathrooms} baths</p>
                    </Text>
                </Card.Section>
                <Card.Section>
                    {isAirKitchen ? <Text className="text-muted" variant="small" > Wifi Air Conditioning Kitchen </Text> : <Text className="text-muted" variant="small" > No Air Conditioning Kitchen </Text>}
                </Card.Section>
                <Card.Section>
                    {isCancellable ? <Text className="text-muted" variant="small" > Cancellation flexibility avialble </Text> : <Text className="text-muted" variant="small" > Cancellation not avialble </Text>}
                </Card.Section>
                <Card.Section>
                    <div className="d-flex align-items-center justify-content-between">
                        <div className="d-flex align-items-center">
                            <img width={20} src="/Images/Icon/star_1_.png" alt="star" />
                            <Text variant="medium">{point} <span>({totalReviews})</span></Text>
                        </div>
                        <Text variant="medium">${perNight}<span className="text-muted">/night</span></Text>
                        <Text className="text-muted" variant="medium">${total}/total</Text>
                    </div>
                </Card.Section>
            </Card.Item>
        </Card>
    );
};

export default RoomDetails;