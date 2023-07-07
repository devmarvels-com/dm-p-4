<a name="readme-top"></a>

[![LinkedIn][linkedin-shield]][linkedin-url]

<br />
<div align="center">
  <a style="display:block;height:45px;padding-top:10px;" href="https://devmarvels.com">
    <img src="https://devmarvels.com/wp-content/uploads/2023/07/devmarvels-logo-white-e1688703543774.png" alt="Logo">
  </a>

  <h2 align="center">Creating Conditional Form Fields with React Hook Form and TypeScript</h2>

  <p align="center">
    <br />
    <a href="https://devmarvels.com/creating-conditional-form-fields-with-react-hook-form-and-typescript/"><strong>Read my blog post! »</strong></a>
    <br />
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Blog Post Outline</summary>
  <ol>
    <li>
      <a href="#">Project Setup and Dependencies: react hook form and TypeScript</a>
    </li>
    <li>
      <a href="#">Implementing Conditional Form Fields</a>
    </li>
    <li><a href="#">Writing our Input Fields Form Schema</a></li>
    <li><a href="#">Building a Form Generator with Conditional Fields and React Hook Form</a></li>
    <li><a href="#">Implementing a Form Generator Component with Dynamic Fields</a></li>
    <li><a href="#">Creating a Form Generator Wrapper Component</a></li>
    <li><a href="#">Conclusion</a></li>
  </ol>
</details>

<!-- ABOUT THE BLOG POST -->

## Summary

In this post we took a deep dive into the creating a dynamic input form with conditional rendering. We used the react hook form’s useWatch function to monitor what our user typed and implemented a form component using the amazing react hook form library.

We first defined our form schema or definition of the fields of our form. We then created a dynamic input control that creates each type of field, subscribed each field using the useWatch hook, and monitored if the conditional logic is valid or not. If it is not valid, we remove the field (unregister) and finally wrapped our dynamic form field inside a FormGenerator component that receives the on submit event (when our user clicks the submit button).

With this we created a dynamic react form we can use time and time again without having to maintain conditional logic by hand directly in code. As we saw on this post, complex forms can easily be challenging to create but if we go beyond and aim to reuse, we can save ourselves many hours of work as requirements change. Sure, there is a tradeoff – having to code this type of form takes more time, but with the help of this post you won’t have to spend too much time.
<br /><br />

### Built With

![Typescript](https://img.shields.io/badge/Typescript-007acc?style=for-the-badge&labelColor=black&logo=typescript&logoColor=007acc)
![React](https://img.shields.io/badge/-React-61DBFB?style=for-the-badge&labelColor=black&logo=react&logoColor=61DBFB)
![Nodejs](https://img.shields.io/badge/Nodejs-3C873A?style=for-the-badge&labelColor=black&logo=node.js&logoColor=3C873A)

<!-- LICENSE -->

## License

Distributed under the MIT License.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTACT -->

## Contact

Percy - https://devmarvels.com/contact/

Blog Post Link: [https://devmarvels.com/creating-conditional-form-fields-with-react-hook-form-and-typescript/](https://devmarvels.com/creating-conditional-form-fields-with-react-hook-form-and-typescript/)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ACKNOWLEDGMENTS -->

## Acknowledgments

Thanks to the creators of all these great tools that helped make this blog post possible!

- [Create React App](https://create-react-app.dev/)
- [React](https://react.dev/)
- [Node.js](https://nodejs.org/)
- [react hook form](https://react-hook-form.com/)
- [TypeScript](typescriptlang.org)
- [VS Code](https://code.visualstudio.com/)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

[stars-shield]: https://img.shields.io/github/stars/devmarvels-com/dm-p-1.svg?style=for-the-badge
[stars-url]: https://github.com/devmarvels-com/dm-p-1/stargazers
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/percyd
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
