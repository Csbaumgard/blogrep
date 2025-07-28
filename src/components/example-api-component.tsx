"use client" 
import { useEffect, useState } from 'react';

type ExampleData = {
    hey: string;
    there: number;
    this: boolean;
    is: number;         
    example: ExDataInObject[];
};

type ExDataInObject = {
    data: string
}

        export default function ExampleApiComponent() {
            const [data, setData] = useState<ExampleData>();

            useEffect(() => {
                async function fetchData() {
                    try {
                        const response = await fetch('http://localhost:8000/example-component-data');
                        const result = await response.json();
                        setData(result);
                    } catch (error) {
                        console.error('Error fetching data:', error);
                    }
                }
                fetchData();
            }, []);

            return (
                <div>
                    <h1>Data from FastAPI:</h1>
                    {/* qmark here says "if data, show data like this : else" */}
                    {data ? (
                        <div>
                            <p>Hey: {data.hey}</p>
                            <p>There: {data.there}</p>
                            <p>This: {data.this.toString()}</p>
                            <p>Is: {data.is}</p>
                            <h2>Example Data in Object:</h2>
                            <ul>
                                {data.example.map((item, index) => (
                                    <li key={index}>{item.data}</li>
                                ))}
                            </ul>
                        </div>
                    ) : (
                        <p>Loading...</p>
                    )}
                </div>
            );
        }