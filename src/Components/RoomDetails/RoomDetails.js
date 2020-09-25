import { Image, Text } from '@fluentui/react';
import { Card } from '@uifabric/react-cards';
import React from 'react';

const RoomDetails = () => {
    return (
        
        <Card className="mt-2 rounded" horizontal >
            <Card.Item fill>
                <Image className="rounded" src="https://placehold.it/180x135" alt="Placeholder image." />
            </Card.Item>
            <Card.Item fill>
                <Card.Section >
                    <Text variant="large">  Contoso </Text>
                </Card.Section>
                <Card.Section>
                    <Text  variant="medium" className="d-flex justify-content-between text-muted">
                        <p>4 guests</p>
                        <p className="ml-3">2 bedrooms</p>
                        <p className="ml-3">2 beds</p>
                        <p className="ml-3">2 baths</p>
                    </Text>
                </Card.Section>
                <Card.Section>
                    <Text className="text-muted" variant="small" > Wifi Air Conditioning Kitchen </Text>
                </Card.Section>
                <Card.Section>
                    <Text className="text-muted" variant="small" > Cancellation flexibility avialble </Text>
                </Card.Section>
                <Card.Section>
                    <div className="d-flex align-items-center justify-content-between">
                        <div className="d-flex align-items-center">
                            <img width={20} src="/Images/Icon/star_1_.png" alt="star" />
                            <Text variant="medium">4.9 <span>(20)</span></Text>
                        </div>
                        <Text variant="medium">$44<span className="text-muted">/night</span></Text>
                        <Text className="text-muted" variant="medium">$167/total</Text>
                    </div>
                </Card.Section>
            </Card.Item>
        </Card>
    );
};

export default RoomDetails;