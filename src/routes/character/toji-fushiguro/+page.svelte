<script lang=ts>
	import { onMount } from "svelte";
    import BackgroundText from "$lib/BackgroundText.svelte";
    import ProductContainer from "$lib/ProductContainer.svelte";
	import CharacterContainer from "$lib/CharacterContainer.svelte";
</script>


<!-- begin main container, viewport height -->
<div class="md:grid md:grid-cols-2 md:grid-rows-1 md:h-screen | flex flex-col-reverse justify-end h-[200vh] | w-screen">
    <!-- begin left column -->
    <div class="md:col-span-1 md:h-full md:border-primary md:border-r md:border-3 | h-[100vh] | w-full ">
        <div class="w-full h-full flex flex-col justify-end items-center bg-transparent">
            <!-- for each viewportHeightFon-->
            <div class="bg-transparent z-1 absolute"><a href="https://jujutsu-kaisen.fandom.com/wiki/Toji_Fushiguro"><img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/3003bbb0-8f61-4929-8bfd-306e974e0947/dellefw-d40bbe19-db84-4c83-981d-de8eeb6a0793.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzMwMDNiYmIwLThmNjEtNDkyOS04YmZkLTMwNmU5NzRlMDk0N1wvZGVsbGVmdy1kNDBiYmUxOS1kYjg0LTRjODMtOTgxZC1kZThlZWI2YTA3OTMucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.gdNhIWD9I9YbjrjLH2GjRbY-p83VMII1bBFQJ0W0Zls" class="max-w-[100vw] sm:max-w-[100vw] h-[65vh] sm:min-h-[67vh]  md:h-[50vh] lg:h-[100vh]" alt="toji"></a></div>
            <BackgroundText />
            
        </div>
    </div>
    <!-- end left column -->
    <!-- begin right column -->
    <div class="md:grid md:grid-cols-1 md:grid-rows-2 md:col-span-1 md:h-full md:border-primary md:border-l md:border-3 | text-center flex flex-col h-[100vh] |  w-full ">
        <!-- begin right column content -->
        <div class="text-xl | h-full flex flex-col justify-start items-center |  border-primary border-b border-3  | bg-background ">
            <!-- top h1 with text-->
            <h1 class="text-3xl p-5 font-sans">featured products</h1>
            <!-- product container -->
            <ProductContainer/>
            <div class="h-[calc(2.25rem+1.875rem)] p-5"></div>
        </div>
        <div class="text-xl | h-full flex flex-col justify-start items-center | border-primary border-t border-3 bg-background ">
            <!-- top h1 with text -->
            <h1 class="text-3xl p-5 font-sans">featured characters</h1>
            <!-- character container -->
            <CharacterContainer/>
            <div class="h-[calc(2.25rem+1.875rem)] p-5"></div>
        </div>
    </div>
</div>