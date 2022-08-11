<script lang="ts">
    import MenuBarItem from "./MenuBarItem.svelte";
    import {MenuIcon, ActivityIcon} from "svelte-feather-icons";

    let open = false;

    const showFullMenu = () => {
        open = true;
    }
    const hideFullMenu = () => {
        open = false;
    }
</script>

<div class="bg-slate-200 dark:bg-slate-700 flex flex-col justify-start items-start transform-gpu overflow-hidden" class:w-16={!open} class:pr-8={open} on:mouseenter={() => showFullMenu()} on:mouseleave={() => hideFullMenu()}>
    <MenuBarItem name="">
        <MenuIcon size="2.5x" slot="icon"></MenuIcon>
    </MenuBarItem>
    <MenuBarItem name="Status">
        <ActivityIcon size="2.5x" slot="icon"></ActivityIcon>
    </MenuBarItem>
</div>