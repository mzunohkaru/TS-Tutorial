import axios from "axios";

export {};

let url: string =
  "https://udemy-utils.herokuapp.com/api/v1/articles?token=token123";

axios.get(url).then((res) => {
  const id: number = 1;
  let data = res.data[id];
  let article: Article = {
    id: data.id,
    title: data.title,
    description: data.description,
  };
  console.log(article);
  //   let person = new Person(data.id, data.title, data.description);
  //   console.log(person);
});

interface Article {
  id: number;
  title: string;
  description: string;
}

/// データの形を定義するだけの場合：interfaceを使用します。これは、関数の引数や戻り値の型としてよく使われます。
/// 実装を含むオブジェクトを作成する場合：classを使用します。クラスは、特定のロジックや振る舞いを持つオブジェクトを作成する際に便利です。

/// Classは、ロパティやメソッドの定義だけでなく、それらの具体的な動作や値も含む

// class Person {
//   id: number;
//   title: string;
//   description: string;

//   constructor(id: number, title: string, description: string) {
//     this.id = id;
//     this.title = title;
//     this.description = description;
//   }
// }
