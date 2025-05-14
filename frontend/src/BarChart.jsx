import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, LinearScale, BarElement } from "chart.js";
import { useEffect, useState } from "react";
ChartJS.register(LinearScale, BarElement);

// const arrayVendasMensais = [
//   {
//     _id: "6824c973015942cef7c0162f",
//     mes: 1,
//     valorVendido: 1134689,
//     __v: 0,
//   },
//   {
//     _id: "6824c9c3015942cef7c01635",
//     mes: 2,
//     valorVendido: 235135,
//     __v: 0,
//   },
//   {
//     _id: "6824c9c9015942cef7c01637",
//     mes: 3,
//     valorVendido: 313213,
//     __v: 0,
//   },
//   {
//     _id: "6824c9d0015942cef7c01639",
//     mes: 4,
//     valorVendido: 364361,
//     __v: 0,
//   },
//   {
//     _id: "6824c9d6015942cef7c0163b",
//     mes: 5,
//     valorVendido: 312133,
//     __v: 0,
//   },
//   {
//     _id: "6824c9de015942cef7c0163d",
//     mes: 6,
//     valorVendido: 134597,
//     __v: 0,
//   },
//   {
//     _id: "6824c9e4015942cef7c0163f",
//     mes: 7,
//     valorVendido: 976511,
//     __v: 0,
//   },
//   {
//     _id: "6824c9ea015942cef7c01641",
//     mes: 8,
//     valorVendido: 94651,
//     __v: 0,
//   },
//   {
//     _id: "6824c9ef015942cef7c01643",
//     mes: 9,
//     valorVendido: 987654,
//     __v: 0,
//   },
//   {
//     _id: "6824c9f7015942cef7c01645",
//     mes: 10,
//     valorVendido: 469468,
//     __v: 0,
//   },
//   {
//     _id: "6824c9ff015942cef7c01647",
//     mes: 11,
//     valorVendido: 651613,
//     __v: 0,
//   },
//   {
//     _id: "6824ca05015942cef7c01649",
//     mes: 12,
//     valorVendido: 134689,
//     __v: 0,
//   },
// ];

const BarChart = () => {
  const [arrVendasMensais, setArrVendasMensais] = useState([]);

  useEffect(() => {
    const carregarVendasMensais = async () => {
      const URI = "http://localhost:3000";

      const respostaFetch = await fetch(URI + "/vendas");
      const jsonRespostaFetch = await respostaFetch.json();

      setArrVendasMensais(jsonRespostaFetch);
    };

    carregarVendasMensais();
  }, []);

  const data = {
    datasets: [
      {
        label: "Vendas Mensais",
        data: arrVendasMensais,
        backgroundColor: "rgba(75, 192, 192, 0.6)",
        parsing: {
          xAxisKey: "mes",
          yAxisKey: "valorVendido",
        },
      },
    ],
  };

  const chartOptions = {
    scales: {
      x: {
        min: 1,
        type: "linear",
        position: "bottom",
      },
      y: {
        beginAtZero: true,
      },
    },
  };

  return <Bar data={data} options={chartOptions} />;
};

export default BarChart;
