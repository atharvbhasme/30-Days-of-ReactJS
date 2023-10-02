import Box from "../components/Box";

export default function ComponentsScreen(){
    return(
        <div style={{
            border: 'black',
            borderWidth: 3,
            width: '100%',
            height: '100%',
            justifyContent:'center',
            alignItems: 'center'
        }}>
            <h1>30 Days Of React</h1>
            <h3>Number Generator</h3>
            <Box />
        </div>
    );
}
