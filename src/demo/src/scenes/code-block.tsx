
import { Code, LezerHighlighter, makeScene2D, word } from '@motion-canvas/2d';
import { DEFAULT, all, createRef, waitFor } from '@motion-canvas/core';
import {HighlightStyle} from '@codemirror/language';
import {tags} from '@lezer/highlight';
import {parser} from '@lezer/java';

export default makeScene2D(function* (view) {

  // @ddietr/codemirror-themes/material-dark
  const materialDarkHighlightStyle = HighlightStyle.define([
    { tag: tags.keyword, color: '#89DDFF'},
    { tag: [tags.name, tags.deleted, tags.character, tags.macroName], color: '#EEFFFF' },
    { tag: [tags.propertyName], color: '#82AAFF' },
    { tag: [tags.processingInstruction, tags.string, tags.inserted, tags.special(tags.string)], color: '#D69D85' }, // "abc" - modified
    { tag: [tags.function(tags.variableName), tags.labelName], color: '#DCDCAA' }, // func() - modified
    { tag: [tags.color, tags.constant(tags.name), tags.standard(tags.name)], color: '#89DDFF' },
    { tag: [tags.definition(tags.name), tags.separator], color: '#EEFFFF' }, // ;
    { tag: [tags.className], color: '#FFCB6B' },
    { tag: [tags.number, tags.changed, tags.annotation, tags.modifier, tags.self, tags.namespace], color: '#B5CEA8' }, // 10 - modified
    { tag: [tags.typeName], color: '#FFCB6B', fontStyle: '#FFCB6B' },
    //{ tag: [tags.operator, tags.operatorKeyword], color: '#FF0000' }, // . - modified
    { tag: [tags.url, tags.escape, tags.regexp, tags.link], color: '#C3E88D' },
    { tag: [tags.meta, tags.comment], color: '#546E7A' },
    { tag: tags.strong, fontWeight: 'bold' },
    { tag: tags.emphasis, fontStyle: 'italic' },
    { tag: tags.link, textDecoration: 'underline' },
    { tag: tags.heading, fontWeight: 'bold', color: '#89DDFF' },
    { tag: [tags.atom, tags.bool, tags.special(tags.variableName)], color: '#EEFFFF' },
    { tag: tags.invalid, color: '#f0717870' },
    { tag: tags.strikethrough, textDecoration: 'line-through' },
]);


  Code.defaultHighlighter = new LezerHighlighter(parser, materialDarkHighlightStyle);
  
  const code = createRef<Code>();

  view.add(
    <Code
      antialiased={true}
      ref={code}
      fill={'#888888'}
      code={`Ya;`}
    />,
  );

  const transitionDelay = 1.2;

  yield* waitFor(2.4);

  yield* all(
    code().code.insert([0, 2], `.LoginPage`, transitionDelay),
    code().selection(word(0, 3, 9), transitionDelay)
  )

  yield* waitFor(2.4);

  yield* all(
    code().code.insert([0, 12], `.Username.Type("John")`, transitionDelay),
    code().selection(word(0, 13, 21), transitionDelay)
  )

  yield* waitFor(2.4);

  yield* all(
    code().code.insert([0, 34], `.Password.Type("***")`, transitionDelay),
    code().selection(word(0, 35, 20), transitionDelay)
  )

  yield* waitFor(2.4);

  yield* all(
    code().code.replace(word(0, 22, 33), `Expect().Attributes.Value.Is("John")`, transitionDelay),
    code().selection(word(0, 13, 45), transitionDelay)
  )

  yield* waitFor(2.4);

  yield* all(
    code().code.replace(word(0, 31, 27), `Styles.Opacity.IsGreaterThan(0.6)`, transitionDelay),
    code().selection(word(0, 22, 42), transitionDelay)
  )

  yield* waitFor(2.4);

  yield* all(
    code().code.replace(word(0, 13, 51), `SignIn.Click()`, transitionDelay),
    code().selection(word(0, 13, 14), transitionDelay)
  )

  yield* waitFor(2.4);

  yield* all(
    code().code.insert([0, 26], `when => when.IsEnabled()`, transitionDelay),
    code().selection(word(0, 20, 31), transitionDelay)
  )

  yield* waitFor(2.4);

  yield* all(
    code().code.replace(word(0, 3, 48), `HomePage.Expect().IsOpened()`, transitionDelay),
    code().selection(word(0, 3, 28), transitionDelay)
  )

  yield* waitFor(2.4);

  yield* all(
    code().code.replace(word(0, 19, 11), `it => it.IsOpened().Title.Contains("Welcome")`, transitionDelay),
    code().selection(word(0, 12, 53), transitionDelay)
  )

  yield* waitFor(2.4);

  yield* all(
    code().code.replace(word(0, 12, 53), `Logout()`, transitionDelay),
    code().selection(word(0, 3, 17), transitionDelay)
  )

  yield* waitFor(2.4);

  yield* all(
    code().code.remove(word(0, 2, 18), transitionDelay),
    code().selection(DEFAULT, transitionDelay)
  )
});
