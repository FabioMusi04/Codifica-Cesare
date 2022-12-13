# Codifica Cesare
<!-- PROJECT SHIELDS -->

[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/FabioMusi04/Codifica-Cesare">
    <img src="images/logo.png" alt="Logo" width="80" height="80" align="center">
  </a>

  <h3 align="center">Codifica Cesare-README</h3>

  <p align="center">
    <br />
    <a href="https://github.com/FabioMusi04/Codifica-Cesare"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <!-- <a href="http://ilmusa.me:3001">View Demo</a> -->
    ·
    <a href="https://github.com/FabioMusi04/Codifica-Cesare/issues">Report Bug</a>
    ·
    <a href="https://github.com/FabioMusi04/Codifica-Cesare/issues">Request Feature</a>
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details id="readme-top">
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

[![Product Name Screen Shot][product-screenshot]]

This is a simple implementation of the Caesar cipher, a type of substitution cipher in which each letter in the plaintext is shifted a certain number of places down the alphabet. In this code, the shift value is determined by the chiave parameter passed to the encrypt function. The specific characters to be included in the cipher are determined by the alfabeto array, which is populated based on the choices made by the user in a web form.

<p align="right">(<a href="#readme-top">back to top</a>)</p>



### Built With


[![Javascript][Javascript.js]][Javascript-url]
[![NodeJS][Node.JS]][NodeJS-url]
![HTML][HTML.html]
![CSS][CSS.css]
[Flowbite][Flowbite-url]
<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started

### Prerequisites

Install Node.js


### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/your_username_/Project-Name.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. Start the node server `index.js`
   ```sh
   node index.js
   ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- USAGE EXAMPLES -->
## Usage

This code is a simple implementation of the Caesar cipher, a type of substitution cipher in which each letter in the plaintext is shifted a certain number of places down the alphabet. In this code, the shift value is determined by the chiave parameter passed to the encrypt function. The specific characters to be included in the cipher are determined by the alfabeto array, which is populated based on the choices made by the user in a web form. The charList function is used to generate arrays of characters within a specified range, which can then be concatenated to the alfabeto array as needed. The encrypt function then iterates through each character in the input string, shifts it by the specified amount, and adds it to an output array. Finally, the array of shifted characters is joined into a single string and returned.

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- ROADMAP -->
## Roadmap

- [x] Setup server
- [x] Setup client
- [x] Setup comunication
- [x] Client interface

See the [open issues](https://github.com/FabioMusi04/Codifica-Cesare/issues) for a full list of proposed features (and known issues).

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- CONTACT -->
## Contact

Fabio Musitelli - fabio.musitelli04@gmail.com

Project Link: [https://github.com/FabioMusi04/Codifica-Cesare](https://github.com/FabioMusi04/Codifica-Cesare)

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- ACKNOWLEDGMENTS -->
## Acknowledgments

* [Node.js][NodeJS-URL]

<p align="right">(<a href="#readme-top">back to top</a>)</p>


## Code Explanation

```
index.js:
```
```
 In this code, the shift value is determined by the chiave parameter passed to the encrypt function. The specific characters to be included in the cipher are determined by the alfabeto array, which is populated based on the choices made by the user in a web form. The charList function is used to generate arrays of characters within a specified range, which can then be concatenated to the alfabeto array as needed. The encrypt function then iterates through each character in the input string, shifts it by the specified amount, and adds it to an output array. Finally, the array of shifted characters is joined into a single string and returned.

This code uses the express package to create a simple web server, and the body-parser package to parse the data submitted through the web form. When the user submits the form, the server receives a POST request and uses the encrypt function to shift the characters in the input string by the specified amount. The resulting string is then sent back to the user in the response.
```

<hr>

```
main.js
```
```
This code is a JavaScript script that listens for key events on a text input element with the ID "message". When a key is pressed or released, the script checks the type of key that was pressed and updates the state of a group of checkbox elements accordingly.

The checkInput function is called whenever a key is pressed in the text input. It checks the ASCII code of the key that was pressed and updates the state of the checkbox elements based on the type of key that was pressed. For example, if a numeric key (0-9) is pressed, the checkbox with the name "list_radio" at index 2 is checked. Similarly, if the space bar is pressed, the checkbox at index 4 is checked, and so on.

The checkDelete function is called whenever a key is released in the text input. It is used to uncheck the checkbox elements if the user deletes the last character of a certain type from the input. For example, if the user deletes the last space character, the checkbox at index 4 is unchecked. This is determined by checking the input string for the presence of the relevant character type using regular expressions.

Overall, this code allows the user to enter text in the input field, and the script automatically updates the state of the checkbox elements based on the characters that are typed or deleted in the input.
```
<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/FabioMusi04/Codifica-Cesare.svg?style=for-the-badge
[contributors-url]: https://github.com/FabioMusi04/Codifica-Cesare/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/FabioMusi04/Codifica-Cesare.svg?style=for-the-badge
[forks-url]: https://github.com/FabioMusi04/Codifica-Cesare/network/members
[stars-shield]: https://img.shields.io/github/stars/FabioMusi04/Codifica-Cesare.svg?style=for-the-badge
[stars-url]: https://github.com/FabioMusi04/Codifica-Cesare/stargazers
[issues-shield]: https://img.shields.io/github/issues/FabioMusi04/Codifica-Cesare.svg?style=for-the-badge
[issues-url]: https://github.com/FabioMusi04/Codifica-Cesare/issues
[license-shield]: https://img.shields.io/github/license/FabioMusi04/Codifica-Cesare.svg?style=for-the-badge
[license-url]: https://github.com/FabioMusi04/Codifica-Cesare/blob/main/LICENSE.txt
[product-screenshot]: images/screenshot.png
[Javascript-url]: https://www.javascript.com/
[NodeJS-url]: https://nodejs.org/en/
[Javascript.js]: https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E
[Node.js]:https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white
[HTML.html]: https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white
[CSS.css]: https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white
