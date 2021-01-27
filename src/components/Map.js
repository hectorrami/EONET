import GoogleMapReact from 'google-map-react'
import LocationMarker from './LocationMarker'

const Map = ({ eventData, center, zoom }) => {

    const marker = eventData.map(event => {
        if (event.categories[0].id === 8) {
            return <LocationMarker lat={event.geometries[0].coordinates[1]} lng={event.geometries[0].coordinates[0]} />
        }

        return null
    })

    return (
        <div className="map">
            <GoogleMapReact bootstrapURLKey={{
                key:
                    'GOOGLE_MAP_KEY'
            }}
                defaultCenter={center}
                defaultZoom={zoom}
            >
                {marker}
            </GoogleMapReact>
        </div>
    )
}

Map.defaultProps = {
    center: {
        lat: 39.0119,
        lng: -98.4842
    },
    zoom: 5
}

export default Map;