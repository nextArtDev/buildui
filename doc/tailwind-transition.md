# When we want no translate text and border radius symontaniously 

if we apply __rounded-full hover:bg-[#5865F2] hover:text-white hover:rounded-2xl transition__ transition by default its not setting on border transition, we should change it to _transition-all_ but if we go to animation tab of dev mode, color transitions smoothly but border radius is doing sth else: because _rounded-full equals 99999px_ and its time divided by that!
we should calculate exactly how pixels we need to make it circle: _half of its width_ here 0.5 *  48px = 24px -> rounded-3xl

```typescript
        <div className="flex items-center justify-center w-12 h-12 text-gray-800 bg-gray-700 rounded-3xl hover:bg-[#5865F2] hover:text-white hover:rounded-2xl transition-all cursor-pointer duration-300 ">
          LOGO
        </div>
```