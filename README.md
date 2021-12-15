Student: Bobby Li

Student ID: 045895042

WEB422NAA Assignment 5 & 6

netlify link: https://upbeat-hopper-f68503.netlify.app/

This assignment is developing a purely front-end app using Angular, then hosting it on Netlify.


To run this locally, clone this repository using:

    git clone url

then install the necessary dependencies by running the following command:

    run npm i

to locally host it and open it in your browser (default port number is 4200) run the following command:

    ng serve --open




This application simulates a lottery ticket machine. The user can click on the dollar amounts any number of times to add up to the total betting amount (shown on the right). The user then chooses 5 of the 20 numbers as their lottery numbers. Each number can only be chosen once and, if clicked, the button will change color and be disabled. These numbers are displayed on the right.

Once five numbers are chosen, the Cash and Clear buttons will change color and be enabled, then the user can either choose to Cash or Clear. The Cash functionality is not implemented so it will instead alert the user. The Clear button will reset the 5 chosen numbers, the betting amount, and reset all buttons to their original state.

This app was created using the root component as the parent and the other components as children to pass data easily. For example, the betting amount can be passed from the pick-amount component(first div) to the root component, which can then pass that to the display-selection component (last div). The same functionality exists between the pick-numbers component(middle div). This even works to pass boolean data to be used in the root component's functions.