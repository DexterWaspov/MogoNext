'use client';

import {
    APIProvider,
    Map,
    AdvancedMarker
} from "@vis.gl/react-google-maps";

export default function GoogleMap() {

    process.env
    const position = { lat: 45.128, lng: -114.762 };

    return (
        <APIProvider apiKey="AIzaSyAiGpr39hwejouuJAih2ye5RZheLlVec-o">
            <div className="w-full h-[200px]">
                <Map
                    mapId={"b3f0975394202de48ff464cf"}
                    defaultCenter={position}
                    defaultZoom={13}
                >
                    <AdvancedMarker position={position} />
                </Map>
            </div>
        </APIProvider>
    );
}