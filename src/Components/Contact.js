import React from 'react';
import styled from 'styled-components';

const StyledContact = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 1em 7em 7em 7em;
  p {
    font-size: 1.25em;
  }
`

const Contact = () => {
  return(
    <StyledContact>
      <h1>What is Lorem Ipsum?</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eget orci eget arcu mattis tincidunt vitae ut dui. Vivamus eu lectus a est gravida hendrerit. Aenean pellentesque pretium libero nec malesuada. Nullam pharetra mi a dolor auctor dapibus. Nulla sit amet lacus blandit, porta eros in, aliquet metus. Cras in risus accumsan, molestie metus eget, tincidunt dolor. Nunc consectetur id quam eget posuere. Duis pretium a eros a volutpat. Pellentesque cursus luctus facilisis. Sed commodo est ut neque volutpat varius. Praesent quis convallis velit. Quisque convallis ligula sed sem pellentesque fermentum. Sed lectus ante, fringilla mollis ipsum nec, porttitor maximus libero. Proin pharetra massa eget lorem ullamcorper tempor. Praesent lacinia turpis eget orci vehicula lacinia. Aenean consectetur, tellus ac vehicula semper, nibh sem maximus nunc, sed consequat tellus mauris non neque. In lacinia, odio gravida maximus blandit, magna purus congue nisl, et pulvinar justo diam et neque. Integer eget massa in ligula tincidunt ornare in imperdiet ex. Praesent ultricies enim et nulla maximus tempor. Mauris tincidunt eu magna nec tristique. Fusce at elementum leo. Donec in nulla nulla. Suspendisse vehicula semper metus in scelerisque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin semper tellus metus, a volutpat urna lobortis nec. Duis tristique sodales tellus, non consequat arcu congue a. Vivamus eu ex purus. Aenean congue felis quis mi accumsan sagittis. Etiam varius ipsum nec velit scelerisque tempus. Praesent eget metus eu leo dignissim tempus a vitae leo. Mauris bibendum orci ac magna eleifend laoreet. Ut egestas, lacus fringilla euismod imperdiet, leo nisl dignissim elit, sit amet mattis purus risus ut ex. Integer non mi mauris. Donec vel lectus sed lorem placerat finibus in ac eros. Donec semper est in suscipit sollicitudin. Nunc eleifend metus vel orci porta dapibus. Integer sit amet leo cursus, luctus ipsum non, ultrices velit. Aenean euismod gravida pulvinar. Sed luctus felis diam, a viverra dui mollis dictum. Suspendisse elementum tristique eros, nec gravida purus hendrerit eu. Sed tempor venenatis purus, eget euismod mauris condimentum vel. Donec vel tincidunt eros, vitae viverra orci. Proin accumsan vitae velit et pellentesque. Integer laoreet nisi a ipsum aliquam bibendum. Cras hendrerit ullamcorper augue. Vivamus sodales hendrerit mauris id eleifend. Maecenas feugiat lorem sit amet dolor consequat, vitae maximus nisl euismod. Aenean vel rutrum felis, ut ullamcorper augue. Nam eu malesuada libero, sed vulputate dolor. Donec pulvinar fringilla nulla, in tristique risus semper quis. In efficitur, massa at ullamcorper sagittis, velit mi imperdiet ex, sit amet aliquam velit arcu eu magna. Praesent eu porta tellus. Donec arcu lacus, semper eu magna sit amet, volutpat auctor sem. Nam porttitor vitae est sit amet egestas. Nam consectetur, eros sed placerat convallis, tellus magna ornare metus, nec vehicula massa justo at nisi. Nam feugiat ultrices sem, sed ultrices elit porttitor vitae. In vel purus sit amet tortor sollicitudin egestas. Donec sit amet magna in justo faucibus varius non vitae orci. Ut volutpat vehicula est ac fermentum. Sed feugiat, mauris non rhoncus pretium, urna nunc placerat ex, vitae accumsan lacus erat a mauris.</p>
    </StyledContact>
  )
}

export default Contact;
