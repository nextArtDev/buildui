Here's the equivalent Tailwind CSS classes for the provided CSS rules:

```html
<div class="container-snap overflow-x-auto scrollbar-hide">
  <!-- Your content here -->
</div>
```

In Tailwind CSS, you can use the following utility classes:

- `overflow-x-auto` to enable horizontal scrolling when the content exceeds the container's width.
- `scrollbar-hide` to hide the scrollbar for all browsers.

The `scrollbar-hide` class is a custom class that you need to define in your CSS file. Here's how you can define it:

```css
/* Hide scrollbar for Chrome, Safari and Opera */
.scrollbar-hide::-webkit-scrollbar {
    display: none;
}

/* Hide scrollbar for IE, Edge and Firefox */
.scrollbar-hide {
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
}
```

This custom class combines the styles for hiding scrollbars across different browsers.

Please note that hiding scrollbars can make it difficult for users to navigate the content, especially on devices without a mouse or trackpad. It's generally recommended to provide an alternative way for users to scroll, such as keyboard navigation or touch gestures.