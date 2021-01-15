import { Import } from "https://deno.land/x/aleph/mod.ts";
import React, { useState } from "https://esm.sh/react";
import About from "../components/About.tsx";
import Introduction from "../components/Introduction.tsx";
import Projects from "../components/Projects.tsx";

export default function Home() {
  return (
    <div className="page">
      <Import from="../style/index.less" />
      <Introduction />
      <About />
      <Projects />
    </div>
  );
}
