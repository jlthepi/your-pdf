import getEmbededHtml  

export default function renderToHTMLString(
  designerContent: string,
  title: string
): Promise<string> {
  const data = getPreviewData(designerContent);
  const div = document.createElement("div");

  div.style.display = "none";
  document.body.appendChild(div);

  const root = createRoot(div);

  flushSync(() => {
    root.render(<PreviewContent data={data} isRenderMode />);
  });

  return new Promise((resolve) => {
    setTimeout(() => {
      const html = div.innerHTML ?? "";
      div.remove();

      const embededHtml = getEmbededHtml(title, html);

      resolve(embededHtml);
    }, 250);
  });
}
