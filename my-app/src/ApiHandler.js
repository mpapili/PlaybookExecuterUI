import React from 'react';
import axios from 'axios';

async function AddPlaybook(data) {
    const resp = await axios.post('http://127.0.0.1:5000/create', {data: data}, {crossdomain: true});
}

// test hitting restful api with axios
async function TestRest() {
    const data = await axios.get('http://127.0.0.1:5000/', { crossdomain: true});
    return data
}

export {TestRest, AddPlaybook}