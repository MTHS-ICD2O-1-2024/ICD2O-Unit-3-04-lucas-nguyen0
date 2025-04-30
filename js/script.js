// Copyright (c) 2025 Lucas Nguyen All rights reserved
//
// Created by: Lucas Nguyen
// Created on: Apr 2025
// This file contains the JS functions for index.html

"use strict"

function enterClicked() {
  // input
  const fahrenheit = parseFloat(document.getElementById("fahrenheit").value)
  // process
  const celsius = (fahrenheit - 32) * 5 / 9
  // output
  document.getElementById("answer").innerHTML =
    "The temperature in celsius is: " + celsius.toFixed(3) + " °C."
}
