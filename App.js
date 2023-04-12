import React from 'react';
import Header from './components/Header'
import Journal from './components/Journal'
import data from "./data"

export default function App() {
    const journals = data.map(item => {
        return (
            <Journal
                key={item.id}
                {...item}
            />
        )
    })
    return (
        <div>
            <Header />
            <section className="journals">
                {journals}
            </section>
        </div>
    )
}