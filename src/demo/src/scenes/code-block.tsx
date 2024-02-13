import {makeScene2D} from '@motion-canvas/2d';
import {
  CodeBlock,
  edit,
  insert,
  lines,
  remove,
} from '@motion-canvas/2d/lib/components/CodeBlock';
import {all, createRef, waitFor} from '@motion-canvas/core';

export default makeScene2D(function* (view) {
  const codeRef = createRef<CodeBlock>();

  yield view.add(<CodeBlock language="js" ref={codeRef} code={`Ya`} />);

  yield* waitFor(1.6);

  yield* codeRef().edit(2.4, false)`Ya.${insert('LoginPage')};`;
  yield* waitFor(2.6);

  yield* codeRef().edit(2.4)`Ya.LoginPage.${insert('Username.Type("John")')};`;
  yield* waitFor(2.6);

  yield* codeRef().edit(2.4)`Ya.LoginPage.Username.Type("John").${insert('Password.Type("123")')};`;

  yield* waitFor(2.6);

  yield* codeRef().edit(2.4)`Ya.LoginPage.Username.${edit('Type("John").Password.Type("123")', 'Expect().Attributes.Value.Is("John")')};`;

  yield* waitFor(2.6);
  
  yield* codeRef().edit(2.4)`Ya.LoginPage.Username.Expect().${edit('Attributes.Value.Is("John")', 'Styles.Opacity.IsGreaterThan(0.6)')};`;

  yield* waitFor(2.6);

  yield* codeRef().edit(2.4)`Ya.LoginPage.${edit('Username.Expect().Styles.Opacity.IsGreaterThan(0.6)', 'SignIn.Click()')};`;

  yield* waitFor(2.6);

  yield* codeRef().edit(2.4)`Ya.LoginPage.SignIn.Click(${insert('when => when.IsEnabled()')});`;

  yield* waitFor(2.6);

  yield* codeRef().edit(2.4)`Ya.${edit('LoginPage.SignIn.Click(when => when.IsEnabled())', 'HomePage.Expect().IsOpened()')};`;

  yield* waitFor(2.6);

  yield* codeRef().edit(2.4)`Ya.HomePage.Expect(${edit(').IsOpened(', 'it => it.IsOpened().Title.Contains("Welcome")')});`;

  yield* waitFor(2.6);

  yield* codeRef().edit(2.4)`Ya.HomePage.${edit('Expect(it => it.IsOpened().Title.Contains("Welcome"))', 'Logout()')};`;

  yield* waitFor(2.6);

  yield* codeRef().edit(2.4)`Ya${remove('.HomePage.Logout();')}`;
});
