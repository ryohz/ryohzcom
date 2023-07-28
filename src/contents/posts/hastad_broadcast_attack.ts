
                export const data = {
                    id: 'hastad_broadcast_attack',
                    title: 'hastad broadcast attack',
                    date: 'crypto',
                    topics: '2023-07-27',
                    content: '# Hastad’s Broadcast Attack\nHack The Box の問題を解く過程で Hastad’s Broadcast Attack というRSA暗号に対する攻撃方法を学んだので、その紹介と実装をします。  \n\n## 攻撃成立条件\nHastad’s Broadcast Attack (以下、単に攻撃とします。) が成立するための条件は  \n同一の平文を異なる$n$で暗号化した暗号文と$n$のペアが$e$個判明していること。   \nです。 \n\n## 攻撃方法\n$e=3$ として考える。  \n中国剰余定理より、以下を満たす値 $x$ が $0＜x≦n_1n_2n_3$ の範囲に必ず一つだけ存在する。  \n$x≡c_1\pmod{n_1}$  \n$x≡c_2\pmod{n_2}$  \n$x≡c_3\pmod{n_3}$  \nまた、RSAの定義より、  \n$x≡m^3\pmod{n}$ なので $m^3≦n_1n_2n_3$ のとき $x=m^3$ となるので $m=x^{\frac{1}{3}}$ で $m$を求めることができる。  \nつまり $x$ を求めることができれば平文が判明する。  \n\n## 一般化\n$x≡c_1\pmod{n_1}$  \n$x≡c_2\pmod{n_2}$  \n$x≡c_3\pmod{n_3}$   \n$\ \ \ \ \ \ \ \ \ \ \ \ \vdots$  \n$x≡c_e\pmod{n_e}$\nを満たす $x$ は中国剰余定理より  \n    \n$S=n_1\times n_2\times n_3\times\cdots\times n_e$  \n$t_1=(\frac{S}{n_1})^{-1}\pmod{n_1}$  \n$t_2=(\frac{S}{n_2})^{-1}\pmod{n_2}$  \n$t_3=(\frac{S}{n_3})^{-1}\pmod{n_3}$  \n$\ \ \ \ \ \ \ \vdots$  \n$t_e=(\frac{S}{n_e})^{-1}\pmod{n_e}$  \nとしたとき\n\n$x=t_1(\frac{S}{n_1})\times c_1+t_2(\frac{S}{n_2})\times c_2+t_3(\frac{S}{n_3})\times c_3 + \cdots t_e(\frac{S}{n_e})\times c_e$  \nとなる。そして平文は  \n$m=x^{\frac{1}{e}}$  \n\n$x$の求め方についてですが、中国剰余定理の証明(ガウスの証明)に使われている式を使っています。一般的によく説明される証明方法の方ではないゆえ、混乱するかもしれないので書いておきます。\n\n## 実装\n\`\`\`python\nfrom gmpy2 import invert,iroot as ir\nimport sys\nfrom Crypto.Util.number import long_to_bytes\n\nc1 = \"redacted\"\nc2 = \"redacted\"\nc3 = \"redacted\"\nn1 = \"redacted\"\nn2 = \"redacted\"\nn3 = \"redacted\"\ne = 3\n\ndef mlt_any(lst):\n    r = 1\n    for i in range(len(lst)):\n        r *= lst[i]\n    return r\n\n\ndef crt(N,C):\n    # N = [n1,n2,n3, .... ,ne]\n    # C = [c1,c2,c3, .... ,ce]\n    try:\n        assert len(N) == len(C)\n    except AssertionError:\n        print(\"Error: N and C must have the same length\")\n        sys.exit(1)\n\n    try:\n        assert len(N) >= e\n    except AssertionError:\n        print(\"Error: number of pairs (n,c) must be same as e\")\n        sys.exit(1)\n\n    N = N[0:e]\n    C = C[0:e]\n\n    mlta = mlt_any(N)\n\n    print(\"modulo:\", mlta)\n    total = 0\n    for (ni,ci) in zip(N,C):\n        p = mlta // ni\n        total += ci * invert(p,ni) * p\n\n    return total % mlta\n\ndef iroot(x):\n    m,is_valid = ir(x,e)\n    if is_valid:\n        print(\"plain text: \",long_to_bytes(m))\n    else:\n        print(\"couldn\'t find any plain text\")\n\ndef main():\n    C = [c1,c2,c3]\n    N = [n1,n2,n3]\n    x = crt(N,C)\n    iroot(x)\n\n\nif __name__ == \"__main__\":\n    main()\n\`\`\`\n\n## 参考にしたもの\n### 中国剰余定理\nhttps://ja.wikipedia.org/wiki/%E4%B8%AD%E5%9B%BD%E3%81%AE%E5%89%B0%E4%BD%99%E5%AE%9A%E7%90%86  \nhttps://www.youtube.com/watch?v=LNQH8d5dEgw  \n### その他 \nhttps://ja.wikipedia.org/wiki/%E3%83%A2%E3%82%B8%E3%83%A5%E3%83%A9%E9%80%86%E6%95%B0  '
                }