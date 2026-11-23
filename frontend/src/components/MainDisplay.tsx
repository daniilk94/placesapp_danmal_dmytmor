import ListOfPlaces from './ListOfPlaces';
import MapComponent from './MapComponent';
import { useAuth } from "../utils/useAuth";
import type { PlacesProps } from '../interfaces.ts';
import type { CSSProperties } from 'react';

const MainDisplay = ({ places }: PlacesProps) => {
    const { isAuthenticated, logout } = useAuth();
    
    const containerStyle: CSSProperties = {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        height: '95dvh',
    };


    const headerStyle: CSSProperties = {
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
        padding: '12px 24px',
        gap: '10px',
    };

    const contentStyle: CSSProperties = {
            display: 'flex',
            flex: 1,
            minHeight: 0
        };

        

    return (
        <div style={containerStyle}>
            <header style={headerStyle}>
                {isAuthenticated ?  (
                    <>
                        <button>Profile</button>
                        <button onClick={logout}>Log Out</button>

                    </>
                ) : (
                    <>
                        <button>Sign Up</button>
                        <button>Log in</button>
                    </>
                )}
            </header>

            <div style={contentStyle}>
                <MapComponent places={places} />
                <ListOfPlaces places={places} />
            </div>
        </div>
    );
};

export default MainDisplay;
