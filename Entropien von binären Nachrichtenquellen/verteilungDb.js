function loadDb () {
  return [

    {
      name: "Reset",
      description: String.raw `For the following exercises, <br>
                               the term <span style="color:#3070b3">Blue</span> refers to distribution function 1 (marked blue in the applet) and <br>
                               the term <span style="color:#e30000">Red</span> refers to distribution function 2 (marked red in applet)`,
      parameters: {
        I1: 12,
        p1: 0.4,
        lambda1: 1,
        I2: 12,
        p2: 0.4,
        lambda2: 3
      },
      dropIndexL: 1,
      dropIndexR: 2
    },

    {
      name: "Exercise 1",
      description: String.raw `Set <span style="color:#3070b3">Blue</span> to Binomial distribution $(I=5, p=0.4)$ and <span style="color:#e30000">Red</span> to Binomial distribution $(I=10, p=0.2)$. <br>
                               What are the probabilities $ {\rm Pr}(z=0)$ and $ {\rm Pr}(z=1)$?`,
      solution: String.raw `<span style="color:#3070b3">Blue</span>: $ {\rm Pr}(z=0)=0.6^5=7.78\%, \hspace{0.3cm}{\rm Pr}(z=1)=0.4 \cdot 0.6^4=25.92\%;$ <br>
                            <span style="color:#e30000">Red</span>: $ {\rm Pr}(z=0)=0.8^{10}=10.74\%, \hspace{0.3cm}{\rm Pr}(z=1)=0.2 \cdot 0.8^9=26.84\%.$`,
      parameters: {
        I1: 5,
        p1: 0.4,
        lambda1: 1,
        I2: 10,
        p2: 0.2,
        lambda2: 3
      },
      dropIndexL: 1,
      dropIndexR: 1
    },

    {
      name: "Exercise 2",
      description: String.raw `Using the same settings as in (1), what are the probabilities $ {\rm Pr}(3 \le z \le 5)$?`,
      solution: String.raw `$\text{Note that }{\rm Pr}(3 \le z \le 5) = {\rm Pr}(z=3) + {\rm Pr}(z=4) + {\rm Pr}(z=5)\text{, or } {\rm Pr}(3 \le z \le 5) = {\rm Pr}(z \le 5) - {\rm Pr}(z \le 2)$ <br>
                            <span style="color:#3070b3">Blue</span>: $ {\rm Pr}(3 \le z \le 5) = 0.2304+ 0.0768 + 0.0102 =1 - 0.6826 = 0.3174;$ <br>
                            <span style="color:#e30000">Red</span>: $ {\rm Pr}(3 \le z \le 5) = 0.2013 + 0.0881 + 0.0264 = 0.9936 - 0.6778 = 0.3158.$`,
      parameters: {
        I1: 5,
        p1: 0.4,
        lambda1: 1,
        I2: 10,
        p2: 0.2,
        lambda2: 3
      },
      dropIndexL: 1,
      dropIndexR: 1
    },

    {
      name: "Exercise 3",
      description: String.raw `Using the same settings as in (1), what are the differences in the linear average $m_1$ and the standard deviation $\sigma$ between the two Binomial distributions?`,
      solution: String.raw `$\text{Average:}\hspace{0.2cm}m_\text{1} = I \cdot p\hspace{0.3cm} \Rightarrow\hspace{0.3cm} m_\text{1, Blue}  = 5 \cdot 0.4 = 2 = \ m_\text{1, Red} = 10 \cdot 0.2; $ <br>
                            $\text{Standard deviation:}\hspace{0.4cm}\sigma = \sqrt{I \cdot p \cdot (1-p)} = \sqrt{m_1 \cdot (1-p)}\hspace{0.3cm}\Rightarrow\hspace{0.3cm} \sigma_{\rm Blue} = \sqrt{2 \cdot 0.6} =1.095 \le \sigma_{\rm Red} = \sqrt{2 \cdot 0.8} = 1.265.$`,
      parameters: {
        I1: 5,
        p1: 0.4,
        lambda1: 1,
        I2: 10,
        p2: 0.2,
        lambda2: 3
      },
      dropIndexL: 1,
      dropIndexR: 1
    },

    {
      name: "Exercise 4",
      description: String.raw `Set <span style="color:#3070b3">Blue</span> to Binomial distribution $(I=15, p=0.3)$ and <span style="color:#e30000">Red</span> to Poisson distribution $(\lambda=4.5)$. <br>
                               What differences arise between both distributions regarding the average $m_1$ and variance $\sigma^2$?`,
      solution: String.raw `$\text{Both distributions have the same average:}\hspace{0.2cm}m_\text{1, Blue}  =  I \cdot p\ = 15 \cdot 0.3\hspace{0.15cm} = 4.5 = \  m_\text{1, Red} = \lambda$; <br>
                            $\text{Binomial distribution: }\hspace{0.2cm} \sigma_\text{Blue}^2 = m_\text{1, Blue} \cdot (1-p)\hspace{0.15cm} = 3.15 < \text{Poisson distribution: }\hspace{0.2cm} \sigma_\text{Red}^2 = \lambda\hspace{0.15cm} = 4.5$;`,
      parameters: {
        I1: 15,
        p1: 0.3,
        lambda1: 1,
        I2: 10,
        p2: 0.2,
        lambda2: 4.5
      },
      dropIndexL: 1,
      dropIndexR: 2
    },

    {
      name: "Exercise 5",
      description: String.raw `Using the same settings as in (4), what are the probabilities $ {\rm Pr}(z  \gt 10)$ and $ {\rm Pr}(z \gt 15)$?`,
      solution: String.raw `$\text{Binomial: }\hspace{0.2cm} {\rm Pr}(z  \gt 10) = 1 - {\rm Pr}(z  \le 10) = 1 - 0.9993 = 0.0007;\hspace{0.3cm} {\rm Pr}(z \gt 15) = 0 \ {\rm (exactly)}$. <br>
                            $\text{Poisson: }\hspace{0.2cm} {\rm Pr}(z  \gt 10) = 1 - 0.9933 = 0.0067;\hspace{0.3cm}{\rm Pr}(z \gt 15) \gt 0\hspace{0.2cm}( \approx 0)$; <br>
                            $\text{Approximation: }\hspace{0.2cm}{\rm Pr}(z \gt 15) \ge {\rm Pr}(z = 16) = \lambda^{16} /{16!}\approx 2 \cdot 10^{-22}$`,
      parameters: {
        I1: 15,
        p1: 0.3,
        lambda1: 1,
        I2: 10,
        p2: 0.2,
        lambda2: 4.5
      },
      dropIndexL: 1,
      dropIndexR: 2
    },

    {
      name: "Exercise 6",
      description: String.raw `Using the same settings as in (4), which parameters lead to a symmetric distribution around $m_1$?`,
      solution: String.raw `$\text{Binomial distribution with }p = 0.5\text{:   }p_\mu =  {\rm Pr}(z  = \mu)\text{ symmetric around } m_1 = I/2 = 7.5 \ ⇒  \ p_μ = p_{I–μ}\ ⇒  \  p_8 = p_7, \ p_9 = p_6,  \text{etc.}$ <br>
                            $\text{In contrast, the Poisson distribution is never symmetric, since it extends to infinity!}$`,
      parameters: {
        I1: 15,
        p1: 0.3,
        lambda1: 1,
        I2: 10,
        p2: 0.2,
        lambda2: 4.5
      },
      dropIndexL: 1,
      dropIndexR: 2
    },

  ]
}
